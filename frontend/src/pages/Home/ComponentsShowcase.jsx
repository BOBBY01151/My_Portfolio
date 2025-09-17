import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Badge,
  Input,
  Textarea,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Progress,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TypingEffect,
  ImageWithFallback
} from '../../components/FigmaUI';
import { 
  Settings, 
  User, 
  Mail, 
  Phone, 
  Star,
  Heart,
  ThumbsUp,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ComponentsShowcase = () => {
  const [progress, setProgress] = useState(33);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            FigmaUI Components Showcase
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive collection of modern UI components
          </p>
          <div className="flex justify-center space-x-2">
            <Badge variant="default">React</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="outline">Radix UI</Badge>
            <Badge variant="destructive">TypeScript</Badge>
          </div>
        </div>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Various button styles and variants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Settings className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Gradient
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Components */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>Input fields and form elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Enter your message" rows={4} />
            </div>
            <div className="flex gap-4">
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>Modern web application</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A comprehensive project showcasing modern web technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Beta</CardTitle>
              <CardDescription>Mobile-first design</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Responsive design with mobile-first approach and modern UI patterns.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Framer Motion</Badge>
                <Badge variant="outline">Prisma</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Gamma</CardTitle>
              <CardDescription>AI-powered solution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced AI integration with machine learning capabilities and real-time processing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="destructive">Python</Badge>
                <Badge variant="destructive">TensorFlow</Badge>
                <Badge variant="destructive">Docker</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Dialog Section */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog & Modals</CardTitle>
            <CardDescription>Interactive dialog components</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to perform this action? This cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Organized content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <h3 className="text-lg font-semibold">Project Overview</h3>
                <p className="text-muted-foreground">
                  This is a comprehensive overview of the project, highlighting its main features and capabilities.
                </p>
              </TabsContent>
              <TabsContent value="features" className="space-y-4">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Responsive design</li>
                  <li>• Modern UI components</li>
                  <li>• Accessibility support</li>
                  <li>• Performance optimized</li>
                </ul>
              </TabsContent>
              <TabsContent value="tech" className="space-y-4">
                <h3 className="text-lg font-semibold">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Radix UI</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Avatar Section */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>User profile images and fallbacks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Accordion Section */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Collapsible content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is this project about?</AccordionTrigger>
                <AccordionContent>
                  This project is a comprehensive showcase of modern UI components built with React and Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What technologies are used?</AccordionTrigger>
                <AccordionContent>
                  The project uses React, TypeScript, Tailwind CSS, Radix UI, and Framer Motion for animations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Simply clone the repository, install dependencies, and run the development server to get started.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Indicators</CardTitle>
            <CardDescription>Loading and completion progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Project Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setProgress(Math.max(0, progress - 10))}
              >
                Decrease
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setProgress(Math.min(100, progress + 10))}
              >
                Increase
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tooltips Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tooltips</CardTitle>
            <CardDescription>Contextual help and information</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip!</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More information available here</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Typing Effect Section */}
        <Card>
          <CardHeader>
            <CardTitle>Typing Effect</CardTitle>
            <CardDescription>Animated text with typing effect</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">
              I am a{' '}
              <TypingEffect 
                words={['Developer', 'Designer', 'Creator', 'Problem Solver']}
                className="text-primary"
                typingSpeed={100}
                deletingSpeed={80}
                delayBetweenWords={2000}
              />
            </div>
          </CardContent>
        </Card>

        {/* Image with Fallback */}
        <Card>
          <CardHeader>
            <CardTitle>Image with Fallback</CardTitle>
            <CardDescription>Error-resistant image component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Valid Image</h4>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689692784625-1ce82784a25a?w=300&h=200&fit=crop"
                  alt="Valid image"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Invalid Image (Fallback)</h4>
                <ImageWithFallback
                  src="https://invalid-url.com/image.jpg"
                  alt="Invalid image"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Separator */}
        <Separator />

        {/* Footer */}
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">FigmaUI Component Library</h3>
          <p className="text-muted-foreground">
            Built with modern web technologies and accessibility in mind
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
