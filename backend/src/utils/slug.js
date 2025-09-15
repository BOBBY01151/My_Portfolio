const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Replace spaces with -
    .replace(/\s+/g, '-')
    // Remove all non-word chars
    .replace(/[^\w\-]+/g, '')
    // Replace multiple - with single -
    .replace(/\-\-+/g, '-')
    // Remove leading/trailing -
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

module.exports = { slugify };
