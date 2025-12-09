import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// Import FigmaUI components
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  Badge,
  Button,
  Input,
  Textarea,
  Label,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  TypingEffect
} from '../../components/FigmaUI';

import Container from '../../components/Layout/Container';
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section';

const ContactEnhanced = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vimukthibudi0007@icloud.com',
      description: 'Send me an email anytime',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 756137623',
      description: 'Call or text me',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Athurugiriya, Sri Lanka',
      description: 'Available for remote work',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'Usually responds quickly',
      color: 'text-orange-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/BOBBY01151',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vimukthi-buddika-ba7a90310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <Container>
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Let's{' '}
                <TypingEffect 
                  words={['Connect', 'Collaborate', 'Create', 'Innovate']}
                  className="text-primary"
                  typingSpeed={100}
                  deletingSpeed={80}
                  delayBetweenWords={2000}
                />
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                I'm always excited to discuss new opportunities, creative projects, or just have a chat about technology and innovation.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Get In Touch
                    </CardTitle>
                    <CardDescription>
                      Choose your preferred way to reach me
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className={`p-2 rounded-lg bg-muted ${info.color}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{info.title}</h4>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Follow Me</CardTitle>
                    <CardDescription>
                      Connect with me on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground ${social.color}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon className="h-5 w-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900 dark:text-green-100">Available for Work</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Currently accepting new projects and collaboration opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or just say hello..."
                          rows={6}
                          required
                        />
                      </div>

                      {submitStatus === 'success' && (
                        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <AlertTitle className="text-green-900 dark:text-green-100">Message Sent!</AlertTitle>
                          <AlertDescription className="text-green-700 dark:text-green-300">
                            Thank you for your message. I'll get back to you within 24 hours.
                          </AlertDescription>
                        </Alert>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Separator className="mb-8" />
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why Work With Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Quality Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      I prioritize code quality, user experience, and maintainable solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Timely Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      I respect deadlines and keep you updated throughout the development process.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Clear Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      I believe in transparent communication and regular project updates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactEnhanced;
