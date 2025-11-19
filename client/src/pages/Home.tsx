import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Smartphone } from "lucide-react";

export default function Home() {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
    tools: ["Git", "VS Code", "Figma", "npm", "Webpack", "Vite"],
    concepts: ["Responsive Design", "REST APIs", "Component Architecture", "Version Control"]
  };

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive online store with product catalog, shopping cart, and checkout functionality.",
      tech: ["React", "Tailwind CSS", "Context API"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location search and 5-day forecast using OpenWeather API.",
      tech: ["JavaScript", "CSS3", "REST API"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A todo application with drag-and-drop functionality, local storage, and filtering options.",
      tech: ["React", "TypeScript", "Local Storage"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm a <span className="text-primary">Website Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Building modern, responsive web experiences
              </p>
            </div>
            <p className="text-muted-foreground max-w-[600px]">
              I'm a passionate web developer specializing in creating beautiful, functional websites. 
              With expertise in modern frontend technologies, I transform ideas into engaging digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border-2 border-primary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Code2 className="h-24 w-24 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <CardTitle>Frontend Technologies</CardTitle>
                </div>
                <CardDescription>Core web development languages and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <CardTitle>Development Tools</CardTitle>
                </div>
                <CardDescription>Tools and platforms I work with daily</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <CardTitle>Key Concepts</CardTitle>
                </div>
                <CardDescription>Principles and methodologies I follow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((concept) => (
                    <Badge key={concept} variant="secondary">{concept}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              A selection of my recent work showcasing different skills and technologies
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Connect</h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contact@example.com" className="gap-2">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
