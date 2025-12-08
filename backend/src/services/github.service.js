const axios = require('axios');

/**
 * Parse GitHub URL and extract owner and repo name
 * Supports formats:
 * - https://github.com/owner/repo
 * - https://github.com/owner/repo/
 * - github.com/owner/repo
 * - owner/repo
 */
const parseGitHubUrl = (url) => {
  try {
    // Remove trailing slash and whitespace
    url = url.trim().replace(/\/$/, '');
    
    // If it's just owner/repo format
    if (!url.includes('http') && !url.includes('github.com')) {
      const parts = url.split('/');
      if (parts.length === 2) {
        return { owner: parts[0], repo: parts[1] };
      }
      throw new Error('Invalid GitHub URL format');
    }
    
    // Extract owner and repo from URL
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match || match.length < 3) {
      throw new Error('Invalid GitHub URL format');
    }
    
    return {
      owner: match[1],
      repo: match[2].replace('.git', '') // Remove .git if present
    };
  } catch (error) {
    throw new Error('Invalid GitHub URL format. Expected: https://github.com/owner/repo or owner/repo');
  }
};

/**
 * Fetch repository information from GitHub API
 */
const fetchRepositoryInfo = async (url) => {
  try {
    const { owner, repo } = parseGitHubUrl(url);
    
    // GitHub API endpoint (public repos don't need authentication)
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-API'
      },
      timeout: 10000
    });
    
    const repoData = response.data;
    
    // Extract relevant information
    return {
      title: repoData.name,
      description: repoData.description || '',
      shortDescription: repoData.description 
        ? (repoData.description.length > 200 
          ? repoData.description.substring(0, 200) + '...' 
          : repoData.description)
        : '',
      image: repoData.owner?.avatar_url || 'https://via.placeholder.com/400x300?text=Project',
      technologies: repoData.topics || [],
      githubUrl: repoData.html_url,
      liveUrl: repoData.homepage || '',
      finished: !repoData.archived && repoData.size > 0,
      featured: repoData.stargazers_count > 10, // Auto-feature if has stars
      // Additional metadata
      _githubData: {
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        language: repoData.language,
        createdAt: repoData.created_at,
        updatedAt: repoData.updated_at,
        defaultBranch: repoData.default_branch,
        openIssues: repoData.open_issues_count
      }
    };
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Repository not found. Please check the GitHub URL.');
    } else if (error.response?.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please try again.');
    } else {
      throw new Error(error.message || 'Failed to fetch repository information from GitHub');
    }
  }
};

module.exports = {
  parseGitHubUrl,
  fetchRepositoryInfo
};

