import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Upload, 
  Trash2, 
  Download,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Button,
  Alert,
  AlertTitle,
  AlertDescription
} from '../../../components/FigmaUI';
import Container from '../../../components/Layout/Container';
import { API_ENDPOINTS } from '../../../lib/constants';
import axiosInstance from '../../../lib/axiosInstance';

const CVList = () => {
  const [cvs, setCvs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchCVs();
  }, []);

  const fetchCVs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get(API_ENDPOINTS.CV.LIST);
      if (response.data.success) {
        setCvs(response.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching CVs:', err);
      setError('Failed to load CVs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please select a PDF file');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
      setUploadSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      
      const formData = new FormData();
      formData.append('cv', selectedFile);
      
      await axiosInstance.post(API_ENDPOINTS.CV.UPLOAD, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setUploadSuccess(true);
      setSelectedFile(null);
      // Reset file input
      const fileInput = document.getElementById('cv-upload');
      if (fileInput) fileInput.value = '';
      
      // Refresh CV list
      await fetchCVs();
      
      setTimeout(() => setUploadSuccess(false), 5000);
    } catch (err) {
      console.error('Error uploading CV:', err);
      setError(err.response?.data?.message || 'Failed to upload CV. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this CV?')) {
      return;
    }
    
    try {
      await axiosInstance.delete(API_ENDPOINTS.CV.DELETE(id));
      await fetchCVs();
    } catch (err) {
      console.error('Error deleting CV:', err);
      alert('Failed to delete CV. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container>
        <div className="py-20 relative z-30">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                CV <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Management</span>
              </h1>
            </div>
            <p className="text-gray-300">
              Upload and manage your CV. Only one CV can be active at a time.
            </p>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-white">Upload New CV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select PDF File (Max 10MB)
                    </label>
                    <input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileSelect}
                      className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-cyan-500 file:to-purple-600 file:text-white hover:file:from-cyan-600 hover:file:to-purple-700 file:cursor-pointer bg-black/30 border border-gray-600 rounded-lg"
                    />
                    {selectedFile && (
                      <p className="mt-2 text-sm text-gray-400">
                        Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                      </p>
                    )}
                  </div>
                  
                  {uploadSuccess && (
                    <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-900 dark:text-green-100">Success</AlertTitle>
                      <AlertDescription className="text-green-700 dark:text-green-300">
                        CV uploaded successfully!
                      </AlertDescription>
                    </Alert>
                  )}

                  {error && (
                    <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertTitle className="text-red-900 dark:text-red-100">Error</AlertTitle>
                      <AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    loading={uploading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CVs List */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
              <p className="text-gray-400 mt-4">Loading CVs...</p>
            </div>
          ) : cvs.length === 0 ? (
            <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No CVs uploaded</h3>
                <p className="text-gray-400">Upload your first CV to get started</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {cvs.map((cv, index) => (
                <motion.div
                  key={cv._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className={`backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border ${
                    cv.isActive ? 'border-green-500/50' : 'border-cyan-500/20'
                  } hover:border-cyan-400/50 transition-all`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <h3 className="text-lg font-semibold text-white">{cv.fileName}</h3>
                            {cv.isActive && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/50">
                                Active
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400 ml-8">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(cv.createdAt)}
                            </div>
                            <span>•</span>
                            <span>{formatFileSize(cv.fileSize)}</span>
                            <span>•</span>
                            <span>Version {cv.version}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={async () => {
                              try {
                                const response = await axiosInstance.get(API_ENDPOINTS.CV.DOWNLOAD, {
                                  responseType: 'blob'
                                });
                                const url = window.URL.createObjectURL(new Blob([response.data]));
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', cv.fileName);
                                document.body.appendChild(link);
                                link.click();
                                link.remove();
                                window.URL.revokeObjectURL(url);
                              } catch (error) {
                                console.error('Error downloading CV:', error);
                                alert('Failed to download CV');
                              }
                            }}
                            className="bg-black/30 border-gray-600 text-gray-300 hover:bg-black/50"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(cv._id)}
                            className="bg-black/30 border-red-600 text-red-400 hover:bg-red-900/20"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CVList;

