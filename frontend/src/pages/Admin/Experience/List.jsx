import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Loader2,
  Search,
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  CheckCircle
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
  Alert, 
  AlertDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../../components/FigmaUI';

import Container from '../../../components/Layout/Container';
import axiosInstance from '../../../lib/axiosInstance';
import { API_ENDPOINTS } from '../../../lib/constants';

const AdminExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    technologies: '',
    type: 'full-time'
  });

  // Fetch all experiences
  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_ENDPOINTS.EXPERIENCE.LIST);
      setExperiences(response.data.data || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch experiences');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      technologies: '',
      type: 'full-time'
    });
    setShowForm(false);
    setEditingExperience(null);
  };

  // Start adding new experience
  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  // Start editing experience
  const handleStartEdit = (experience) => {
    setFormData({
      title: experience.title || '',
      company: experience.company || '',
      location: experience.location || '',
      startDate: experience.startDate ? new Date(experience.startDate).toISOString().split('T')[0] : '',
      endDate: experience.endDate ? new Date(experience.endDate).toISOString().split('T')[0] : '',
      current: experience.current || false,
      description: experience.description || '',
      technologies: experience.technologies?.join(', ') || '',
      type: experience.type || 'full-time'
    });
    setEditingExperience(experience);
    setShowForm(true);
  };

  // Cancel form
  const handleCancel = () => {
    resetForm();
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Save experience (create or update)
  const handleSave = async () => {
    if (!formData.title || !formData.company || !formData.startDate) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setSaving(true);
      const experienceData = {
        ...formData,
        technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t),
        startDate: new Date(formData.startDate),
        endDate: formData.current ? null : (formData.endDate ? new Date(formData.endDate) : null)
      };

      if (editingExperience) {
        // Update existing
        const response = await axiosInstance.put(
          API_ENDPOINTS.EXPERIENCE.DETAIL(editingExperience._id),
          experienceData
        );
        setExperiences(experiences.map(e => e._id === editingExperience._id ? response.data.data : e));
      } else {
        // Create new
        const response = await axiosInstance.post(API_ENDPOINTS.EXPERIENCE.LIST, experienceData);
        setExperiences([response.data.data, ...experiences]);
      }

      resetForm();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save experience');
    } finally {
      setSaving(false);
    }
  };

  // Delete experience
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;

    try {
      await axiosInstance.delete(API_ENDPOINTS.EXPERIENCE.DETAIL(id));
      setExperiences(experiences.filter(e => e._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete experience');
    }
  };

  // Filter experiences
  const filteredExperiences = experiences.filter(exp =>
    exp.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (date) => {
    if (!date) return 'Present';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

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
                    <Briefcase className="w-10 h-10 text-cyan-400" />
                    Manage Experience
                  </h1>
                  <p className="text-gray-300">Add, edit, and organize your professional experience</p>
                </div>
                <Button
                  onClick={handleAddNew}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </div>
            </motion.div>

            {/* Add/Edit Form */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingExperience ? 'Edit Experience' : 'Add New Experience'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">Job Title *</Label>
                        <Input
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="e.g., Frontend Developer"
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">Company *</Label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g., Tech Company Inc."
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">Location *</Label>
                        <Input
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g., Colombo, Sri Lanka"
                          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">Employment Type</Label>
                        <Select name="type" value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                          <SelectTrigger className="bg-black/30 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">Start Date *</Label>
                        <Input
                          name="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="bg-black/30 border-gray-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">End Date</Label>
                        <Input
                          name="endDate"
                          type="date"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          disabled={formData.current}
                          className="bg-black/30 border-gray-600 text-white disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="current"
                        checked={formData.current}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <Label className="text-gray-300 cursor-pointer">Currently working here</Label>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Description *</Label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Describe your role, responsibilities, and achievements..."
                        className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={2000}
                      />
                      <p className="text-xs text-gray-400">{formData.description.length}/2000 characters</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Technologies (comma-separated)</Label>
                      <Input
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleInputChange}
                        placeholder="React, TypeScript, Node.js, MongoDB"
                        className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handleSave}
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
                            {editingExperience ? 'Update' : 'Save'} Experience
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancel}
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

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search experiences by title, company, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Experiences List */}
            {!loading && !error && (
              <div className="space-y-6">
                {filteredExperiences.length === 0 ? (
                  <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50">
                    <CardContent className="py-12 text-center">
                      <p className="text-gray-400">
                        {searchTerm ? 'No experiences found matching your search' : 'No experiences yet. Add your first one!'}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredExperiences.map((experience, index) => (
                    <motion.div
                      key={experience._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-white text-xl">{experience.title}</CardTitle>
                                {experience.current && (
                                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Current
                                  </Badge>
                                )}
                                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                                  {experience.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-gray-300 mb-3">
                                <div className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4" />
                                  <span>{experience.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{experience.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                                </span>
                              </div>
                              <p className="text-gray-300 leading-relaxed mb-3">{experience.description}</p>
                              {experience.technologies && experience.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, idx) => (
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
                                onClick={() => handleStartEdit(experience)}
                                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(experience._id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
      </Container>
      </section>
    </div>
  );
};

export default AdminExperience;
