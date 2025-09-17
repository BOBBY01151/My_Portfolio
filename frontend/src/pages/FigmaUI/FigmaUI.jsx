import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  Textarea,
  Badge,
  TypingEffect
} from '../../components/FigmaUI';
import { Github, Mail, Star } from 'lucide-react';

export default function FigmaUIDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const typingWords = [
    'Modern UI Components',
    'Accessible Design',
    'Tailwind CSS',
    'React Ready',
    'Beautiful Animations'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              FigmaUI Components
            </h1>
            <p className="text-muted-foreground text-lg">
              Advanced UI components integrated into your portfolio
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <TypingEffect 
                words={typingWords}
                className="font-medium"
                typingSpeed={100}
                deletingSpeed={80}
                delayBetweenWords={2000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Components Demo */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Buttons Demo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Button Variants
              </CardTitle>
              <CardDescription>
                Different button styles and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Using FigmaUI form components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>

          {/* Badges Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Badge Components</CardTitle>
              <CardDescription>
                Status indicators and labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>FigmaUI</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Feature Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Integration Features</CardTitle>
              <CardDescription>
                What you get with FigmaUI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span className="text-sm">Accessible components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span className="text-sm">Dark mode support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span className="text-sm">Customizable themes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span className="text-sm">Motion animations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">✓</Badge>
                  <span className="text-sm">TypeScript ready</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
            <CardDescription>
              Import and use FigmaUI components in your pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div className="text-muted-foreground mb-2">// Import components</div>
              <div>import {`{`} Button, Card, Input {`}`} from '../components/FigmaUI';</div>
              <br />
              <div className="text-muted-foreground mb-2">// Use in your component</div>
              <div>&lt;Button variant="default"&gt;Click me&lt;/Button&gt;</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
