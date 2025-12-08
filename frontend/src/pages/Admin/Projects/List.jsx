import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Github, 
  ExternalLink, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Loader2,
  Search,
  Star,
  Code,
  FileText
} from 'lucide-react';

import { 
  Button, 
  Input, 
  Textarea, 
  Badge, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  Label, 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger, 
  Alert, 
  AlertDescription 
} from '../../../components/FigmaUI';

import { ImageWithFallback } from '../../../components/FigmaUI';
import Container from '../../../components/Layout/Container';
import axiosInstance from '../../../lib/axiosInstance';
import { API_ENDPOINTS } from '../../../lib/constants';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Manual Form State
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualFormData, setManualFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    image: '',
    technologies: '',
    githubUrl: '',
    liveUrl: '',
    finished: false,
    featured: false
  });
  
  // GitHub Import State
  const [githubUrl, setGithubUrl] = useState('');
  const [importing, setImporting] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [importError, setImportError] = useState(null);
  
  // Edit State
  const [editingProject, setEditingProject] = useState(null);
  const [saving, setSaving] = useState(false);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_ENDPOINTS.PROJECTS.LIST);
      setProjects(response.data.data || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Reset manual form
  const resetManualForm = () => {
    setManualFormData({
      title: '',
      shortDescription: '',
      description: '',
      image: '',
      technologies: '',
      githubUrl: '',
      liveUrl: '',
      finished: false,
      featured: false
    });
    setShowManualForm(false);
  };

  // Handle manual form input
  const handleManualInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setManualFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Save manual project
  const handleSaveManualProject = async () => {
    if (!manualFormData.title || !manualFormData.shortDescription || !manualFormData.description) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setSaving(true);
      const projectData = {
        ...manualFormData,
        technologies: manualFormData.technologies.split(',').map(t => t.trim()).filter(t => t)
      };

      const response = await axiosInstance.post(API_ENDPOINTS.PROJECTS.LIST, projectData);
      setProjects([response.data.data, ...projects]);
      resetManualForm();
      alert('Project saved successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save project');
    } finally {
      setSaving(false);
    }
  };

  // Handle GitHub URL import
  const handleImportFromGitHub = async () => {
    if (!githubUrl.trim()) {
      setImportError('Please enter a GitHub URL');
      return;
    }

    try {
      setImporting(true);
      setImportError(null);
      setPreviewData(null);

      const response = await axiosInstance.post('/projects/import-github', {
        url: githubUrl.trim(),
        save: false
      });

      setPreviewData(response.data.data);
    } catch (err) {
      setImportError(err.response?.data?.message || 'Failed to import from GitHub');
      setPreviewData(null);
    } finally {
      setImporting(false);
    }
  };

  // Save imported project
  const handleSaveImportedProject = async () => {
    if (!previewData) return;

    try {
      setSaving(true);
      const response = await axiosInstance.post(API_ENDPOINTS.PROJECTS.LIST, previewData);
      setProjects([response.data.data, ...projects]);
      setGithubUrl('');
      setPreviewData(null);
      setImportError(null);
      alert('Project saved successfully!');
    } catch (err) {
      setImportError(err.response?.data?.message || 'Failed to save project');
    } finally {
      setSaving(false);
    }
  };

  // Delete project
  const handleDeleteProject = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await axiosInstance.delete(API_ENDPOINTS.PROJECTS.DETAIL(id));
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete project');
    }
  };

  // Start editing project
  const handleStartEdit = (project) => {
    setEditingProject({ ...project });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  // Save edited project
  const handleSaveEdit = async () => {
    if (!editingProject) return;

    try {
      setSaving(true);
      const { _id, _githubData, ...updateData } = editingProject;
      const response = await axiosInstance.put(API_ENDPOINTS.PROJECTS.DETAIL(_id), updateData);
      setProjects(projects.map(p => p._id === _id ? response.data.data : p));
      setEditingProject(null);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update project');
    } finally {
      setSaving(false);
    }
  };

  // Filter projects
  const filteredProjects = projects.filter(project =>
    project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* FigmaUI Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Interactive Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-cyan-400' : 
              i % 4 === 1 ? 'bg-emerald-400' : 
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-blue-400'
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <section className="py-32 relative">
        <Container>
          <div className="relative z-30">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
                    <Code className="w-10 h-10 text-cyan-400" />
                    Manage Projects
                  </h1>
                  <p className="text-gray-300">Add, edit, and organize your portfolio projects</p>
                </div>
              </div>
            </motion.div>

            <Tabs defaultValue="add" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-black/50 backdrop-blur-xl border border-cyan-500/20">
                <TabsTrigger value="add" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-600/20">
                  <FileText className="w-4 h-4 mr-2" />
                  Add New
                </TabsTrigger>
                <TabsTrigger value="import" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-600/20">
                  <Github className="w-4 h-4 mr-2" />
                  Import GitHub
                </TabsTrigger>
                <TabsTrigger value="list" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-600/20">
                  All Projects ({projects.length})
                </TabsTrigger>
              </TabsList>

              {/* Manual Add Tab */}
              <TabsContent value="add" className="space-y-6">
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Create New Project Manually
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">Title *</Label>
                        <Input
                          name="title"
                          value={manualFormData.title}
                          onChange={handleManualInputChange}
                          placeholder="e.g., Modern E-Commerce UI"
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">Image URL *</Label>
                        <Input
                          name="image"
                          value={manualFormData.image}
                          onChange={handleManualInputChange}
                          placeholder="https://..."
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Short Description * (max 200 chars)</Label>
                      <Input
                        name="shortDescription"
                        value={manualFormData.shortDescription}
                        onChange={handleManualInputChange}
                        placeholder="Brief description for cards..."
                        className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={200}
                      />
                      <p className="text-xs text-gray-400">{manualFormData.shortDescription.length}/200</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Full Description * (max 1000 chars)</Label>
                      <Textarea
                        name="description"
                        value={manualFormData.description}
                        onChange={handleManualInputChange}
                        rows={5}
                        placeholder="Detailed description of the project..."
                        className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={1000}
                      />
                      <p className="text-xs text-gray-400">{manualFormData.description.length}/1000</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">GitHub URL</Label>
                        <Input
                          name="githubUrl"
                          value={manualFormData.githubUrl}
                          onChange={handleManualInputChange}
                          placeholder="https://github.com/username/repo"
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">Live URL</Label>
                        <Input
                          name="liveUrl"
                          value={manualFormData.liveUrl}
                          onChange={handleManualInputChange}
                          placeholder="https://..."
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Technologies (comma-separated)</Label>
                      <Input
                        name="technologies"
                        value={manualFormData.technologies}
                        onChange={handleManualInputChange}
                        placeholder="React, TypeScript, Tailwind CSS"
                        className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="finished"
                          checked={manualFormData.finished}
                          onChange={handleManualInputChange}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-300">Finished</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="featured"
                          checked={manualFormData.featured}
                          onChange={handleManualInputChange}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-300">Featured</span>
                      </label>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handleSaveManualProject}
                        disabled={saving}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                      >
                        {saving ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Save Project
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetManualForm}
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Clear
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* GitHub Import Tab */}
              <TabsContent value="import" className="space-y-6">
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      Import Project from GitHub
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">GitHub Repository URL</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="https://github.com/username/repository or username/repository"
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleImportFromGitHub()}
                          className="flex-1 bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                        <Button 
                          onClick={handleImportFromGitHub}
                          disabled={importing || !githubUrl.trim()}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                        >
                          {importing ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Fetching...
                            </>
                          ) : (
                            <>
                              <Github className="w-4 h-4 mr-2" />
                              Fetch
                            </>
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-400">
                        Paste your GitHub repository URL and click Fetch to preview the project details
                      </p>
                    </div>

                    {importError && (
                      <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
                        <AlertDescription className="text-red-400">{importError}</AlertDescription>
                      </Alert>
                    )}

                    {previewData && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                      >
                        <Card className="border-2 border-cyan-500/50 backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50">
                          <CardHeader>
                            <CardTitle className="text-white">Project Preview</CardTitle>
                            <p className="text-sm text-gray-400">Review and edit before saving</p>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-gray-300">Title</Label>
                                <Input
                                  value={previewData.title || ''}
                                  onChange={(e) => setPreviewData({ ...previewData, title: e.target.value })}
                                  className="bg-black/30 border-gray-600 text-white"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-300">Image URL</Label>
                                <Input
                                  value={previewData.image || ''}
                                  onChange={(e) => setPreviewData({ ...previewData, image: e.target.value })}
                                  className="bg-black/30 border-gray-600 text-white"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label className="text-gray-300">Short Description</Label>
                              <Input
                                value={previewData.shortDescription || ''}
                                onChange={(e) => setPreviewData({ ...previewData, shortDescription: e.target.value })}
                                maxLength={200}
                                className="bg-black/30 border-gray-600 text-white"
                              />
                              <p className="text-xs text-gray-400">
                                {previewData.shortDescription?.length || 0}/200 characters
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label className="text-gray-300">Full Description</Label>
                              <Textarea
                                value={previewData.description || ''}
                                onChange={(e) => setPreviewData({ ...previewData, description: e.target.value })}
                                rows={4}
                                maxLength={1000}
                                className="bg-black/30 border-gray-600 text-white"
                              />
                              <p className="text-xs text-gray-400">
                                {previewData.description?.length || 0}/1000 characters
                              </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-gray-300">GitHub URL</Label>
                                <Input
                                  value={previewData.githubUrl || ''}
                                  onChange={(e) => setPreviewData({ ...previewData, githubUrl: e.target.value })}
                                  className="bg-black/30 border-gray-600 text-white"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-gray-300">Live URL</Label>
                                <Input
                                  value={previewData.liveUrl || ''}
                                  onChange={(e) => setPreviewData({ ...previewData, liveUrl: e.target.value })}
                                  placeholder="https://..."
                                  className="bg-black/30 border-gray-600 text-white"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label className="text-gray-300">Technologies (comma-separated)</Label>
                              <Input
                                value={previewData.technologies?.join(', ') || ''}
                                onChange={(e) => setPreviewData({
                                  ...previewData,
                                  technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                                })}
                                placeholder="React, Node.js, MongoDB"
                                className="bg-black/30 border-gray-600 text-white"
                              />
                            </div>

                            <div className="flex items-center gap-4">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={previewData.finished || false}
                                  onChange={(e) => setPreviewData({ ...previewData, finished: e.target.checked })}
                                  className="w-4 h-4"
                                />
                                <span className="text-gray-300">Finished</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={previewData.featured || false}
                                  onChange={(e) => setPreviewData({ ...previewData, featured: e.target.checked })}
                                  className="w-4 h-4"
                                />
                                <span className="text-gray-300">Featured</span>
                              </label>
                            </div>

                            {previewData._githubData && (
                              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg space-y-2">
                                <p className="text-sm font-semibold text-cyan-400">GitHub Stats:</p>
                                <div className="flex gap-4 text-sm text-gray-300">
                                  <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    {previewData._githubData.stars} stars
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Code className="w-4 h-4 text-cyan-400" />
                                    {previewData._githubData.language || 'N/A'}
                                  </span>
                                </div>
                              </div>
                            )}

                            <div className="flex gap-2 pt-4">
                              <Button
                                onClick={handleSaveImportedProject}
                                disabled={saving || !previewData.title}
                                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                              >
                                {saving ? (
                                  <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Saving...
                                  </>
                                ) : (
                                  <>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Project
                                  </>
                                )}
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => {
                                  setPreviewData(null);
                                  setGithubUrl('');
                                }}
                                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Cancel
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects List Tab */}
              <TabsContent value="list" className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search projects by title, description, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                  </div>
                )}

                {/* Error State */}
                {error && !loading && (
                  <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
                    <AlertDescription className="text-red-400">{error}</AlertDescription>
                  </Alert>
                )}

                {/* Projects List */}
                {!loading && !error && (
                  <div className="space-y-6">
                    {filteredProjects.length === 0 ? (
                      <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50">
                        <CardContent className="py-12 text-center">
                          <p className="text-gray-400">
                            {searchTerm ? 'No projects found matching your search' : 'No projects yet. Add one manually or import from GitHub!'}
                          </p>
                        </CardContent>
                      </Card>
                    ) : (
                      filteredProjects.map((project, index) => (
                        <motion.div
                          key={project._id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                            {editingProject?._id === project._id ? (
                              <CardContent className="p-6 space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label className="text-gray-300">Title</Label>
                                    <Input
                                      value={editingProject.title || ''}
                                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                                      className="bg-black/30 border-gray-600 text-white"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-gray-300">Image URL</Label>
                                    <Input
                                      value={editingProject.image || ''}
                                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                                      className="bg-black/30 border-gray-600 text-white"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label className="text-gray-300">Short Description</Label>
                                  <Input
                                    value={editingProject.shortDescription || ''}
                                    onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
                                    maxLength={200}
                                    className="bg-black/30 border-gray-600 text-white"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label className="text-gray-300">Description</Label>
                                  <Textarea
                                    value={editingProject.description || ''}
                                    onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                                    rows={4}
                                    className="bg-black/30 border-gray-600 text-white"
                                  />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label className="text-gray-300">GitHub URL</Label>
                                    <Input
                                      value={editingProject.githubUrl || ''}
                                      onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                                      className="bg-black/30 border-gray-600 text-white"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-gray-300">Live URL</Label>
                                    <Input
                                      value={editingProject.liveUrl || ''}
                                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                                      className="bg-black/30 border-gray-600 text-white"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label className="text-gray-300">Technologies (comma-separated)</Label>
                                  <Input
                                    value={editingProject.technologies?.join(', ') || ''}
                                    onChange={(e) => setEditingProject({
                                      ...editingProject,
                                      technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                                    })}
                                    className="bg-black/30 border-gray-600 text-white"
                                  />
                                </div>

                                <div className="flex items-center gap-4">
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={editingProject.finished || false}
                                      onChange={(e) => setEditingProject({ ...editingProject, finished: e.target.checked })}
                                      className="w-4 h-4"
                                    />
                                    <span className="text-gray-300">Finished</span>
                                  </label>
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={editingProject.featured || false}
                                      onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked })}
                                      className="w-4 h-4"
                                    />
                                    <span className="text-gray-300">Featured</span>
                                  </label>
                                </div>

                                <div className="flex gap-2">
                                  <Button 
                                    onClick={handleSaveEdit} 
                                    disabled={saving}
                                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                                  >
                                    {saving ? (
                                      <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Saving...
                                      </>
                                    ) : (
                                      <>
                                        <Save className="w-4 h-4 mr-2" />
                                        Save
                                      </>
                                    )}
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    onClick={handleCancelEdit}
                                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                                  >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                  </Button>
                                </div>
                              </CardContent>
                            ) : (
                              <>
                                <CardHeader>
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <CardTitle className="text-white">{project.title}</CardTitle>
                                        {project.featured && (
                                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                                            <Star className="w-3 h-3 mr-1" />
                                            Featured
                                          </Badge>
                                        )}
                                        {project.finished && (
                                          <Badge variant="outline" className="border-green-500/30 text-green-400">
                                            Finished
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-300 mb-2">
                                        {project.shortDescription}
                                      </p>
                                      {project.technologies && project.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                          {project.technologies.map((tech, idx) => (
                                            <Badge key={idx} className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white border-0 text-xs">
                                              {tech}
                                            </Badge>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex gap-2 ml-4">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleStartEdit(project)}
                                        className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                                      >
                                        <Edit className="w-4 h-4" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleDeleteProject(project._id)}
                                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  {project.image && (
                                    <div className="mb-4 rounded-lg overflow-hidden">
                                      <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                      />
                                    </div>
                                  )}
                                  <p className="text-sm text-gray-300 mb-4">
                                    {project.description}
                                  </p>
                                  <div className="flex gap-2">
                                    {project.githubUrl && (
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
                                      >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                      </a>
                                    )}
                                    {project.liveUrl && (
                                      <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                      </a>
                                    )}
                                  </div>
                                </CardContent>
                              </>
                            )}
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AdminProjects;
