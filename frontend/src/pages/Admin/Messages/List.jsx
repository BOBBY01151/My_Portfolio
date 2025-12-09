import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Reply,
  Search,
  Filter,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Button,
  Input,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription
} from '../../../components/FigmaUI';
import Container from '../../../components/Layout/Container';
import { API_ENDPOINTS } from '../../../lib/constants';
import axiosInstance from '../../../lib/axiosInstance';

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, read, replied

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let url = API_ENDPOINTS.CONTACT.LIST;
      if (filter === 'unread') {
        url += '?read=false';
      } else if (filter === 'read') {
        url += '?read=true&replied=false';
      } else if (filter === 'replied') {
        url += '?replied=true';
      }
      
      const response = await axiosInstance.get(url);
      if (response.data.success) {
        setMessages(response.data.data.contacts || []);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await axiosInstance.patch(API_ENDPOINTS.CONTACT.MARK_READ(id));
      fetchMessages();
    } catch (err) {
      console.error('Error marking as read:', err);
    }
  };

  const handleMarkAsReplied = async (id) => {
    try {
      await axiosInstance.patch(API_ENDPOINTS.CONTACT.MARK_REPLIED(id));
      fetchMessages();
    } catch (err) {
      console.error('Error marking as replied:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }
    
    try {
      await axiosInstance.delete(API_ENDPOINTS.CONTACT.DETAIL(id));
      fetchMessages();
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message. Please try again.');
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

  const filteredMessages = messages.filter(message => {
    const searchLower = searchTerm.toLowerCase();
    return (
      message.name.toLowerCase().includes(searchLower) ||
      message.email.toLowerCase().includes(searchLower) ||
      message.subject.toLowerCase().includes(searchLower) ||
      message.message.toLowerCase().includes(searchLower)
    );
  });

  const unreadCount = messages.filter(m => !m.read).length;

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
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Messages</span>
              </h1>
            </div>
            <p className="text-gray-300">
              View and manage messages from your portfolio contact forms
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-black/30 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex gap-2">
                    {[
                      { value: 'all', label: 'All', count: messages.length },
                      { value: 'unread', label: 'Unread', count: unreadCount },
                      { value: 'read', label: 'Read', count: messages.filter(m => m.read && !m.replied).length },
                      { value: 'replied', label: 'Replied', count: messages.filter(m => m.replied).length }
                    ].map((filterOption) => (
                      <Button
                        key={filterOption.value}
                        variant={filter === filterOption.value ? 'default' : 'outline'}
                        onClick={() => setFilter(filterOption.value)}
                        className={filter === filterOption.value 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0' 
                          : 'bg-black/30 border-gray-600 text-gray-300 hover:bg-black/50'
                        }
                      >
                        {filterOption.label} ({filterOption.count})
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Messages List */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
              <p className="text-gray-400 mt-4">Loading messages...</p>
            </div>
          ) : error ? (
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
              <AlertTitle className="text-red-900 dark:text-red-100">Error</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
            </Alert>
          ) : filteredMessages.length === 0 ? (
            <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20">
              <CardContent className="p-12 text-center">
                <Mail className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No messages found</h3>
                <p className="text-gray-400">
                  {searchTerm ? 'Try adjusting your search terms' : 'No messages match the selected filter'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredMessages.map((message, index) => (
                <motion.div
                  key={message._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className={`backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border ${
                    !message.read ? 'border-green-500/50' : 'border-cyan-500/20'
                  } hover:border-cyan-400/50 transition-all`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <User className="w-5 h-5 text-gray-400" />
                            <CardTitle className="text-white">{message.name}</CardTitle>
                            {!message.read && (
                              <Badge className="bg-green-500 text-white">New</Badge>
                            )}
                            {message.replied && (
                              <Badge className="bg-blue-500 text-white">Replied</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {message.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(message.createdAt)}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!message.read && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleMarkAsRead(message._id)}
                              className="bg-black/30 border-gray-600 text-gray-300 hover:bg-black/50"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Mark Read
                            </Button>
                          )}
                          {!message.replied && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleMarkAsReplied(message._id)}
                              className="bg-black/30 border-gray-600 text-gray-300 hover:bg-black/50"
                            >
                              <Reply className="w-4 h-4 mr-1" />
                              Mark Replied
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(message._id)}
                            className="bg-black/30 border-red-600 text-red-400 hover:bg-red-900/20"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{message.subject}</h3>
                        <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{message.message}</p>
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

export default MessagesList;

