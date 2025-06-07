import { ExternalLink, Github, Trophy, Youtube, Atom } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DevOps Automation QA Portal",
      icon: "🧪",
      description: "Developed an internal QA portal for automation teams using Python, Shell scripting, Jenkins, and Ansible. The platform automates functional and regression testing workflows on target websites, significantly reducing manual testing overhead.",
      technologies: ["Python", "Shell", "Jenkins", "Ansible"],
      githubUrl: "https://github.com/lotuswave/qaporta",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      title: "DevOps Payment Integration",
      icon: "💳",
      description: "Built a containerized payment gateway microservice using Docker, JavaScript, AWS, Jenkins, and Ansible. Designed specifically for online UPI transactions with automated deployment pipelines and scalable architecture.",
      technologies: ["Docker", "JavaScript", "AWS", "Microservices"],
      githubUrl: "https://github.com/1919teja/nodejs-api-dockerization-paytm",
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      title: "AI Assistant System for Blind",
      icon: "🤖",
      badge: "MHRD Smart India Hackathon Finalist",
      description: "AI-powered assistant using Python and voice-enabled bot technology with smart cameras. Acts as a self-learning companion for visually impaired users, providing contextual assistance and navigation support.",
      technologies: ["Python", "AI/ML", "Voice Assistant"],
      demoUrl: "https://www.youtube.com/watch?v=Rcc5g07ppsI",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      title: "Quantum Computing Simulator",
      icon: "⚛️",
      badge: "JNTU, Hyderabad",
      description: "Designed an 8-bit qubit simulated quantum processor prototype that simulates multiple quantum algorithms using IBM Quantum platform. Implemented various quantum computing concepts and algorithm simulations.",
      technologies: ["Quantum Computing", "IBM Quantum", "Algorithm Simulation"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">Showcasing innovative solutions and technical implementations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{project.icon}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                {project.badge && (
                  <div className="mb-4">
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-0">
                      <Trophy className="mr-1 h-3 w-3" />
                      {project.badge}
                    </Badge>
                  </div>
                )}
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className={`${project.bgColor} ${project.color} border-0`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${project.color} border-current hover:bg-current hover:text-slate-950`}
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  )}
                  
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${project.color} border-current hover:bg-current hover:text-slate-950`}
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <Youtube className="mr-2 h-4 w-4" />
                      Demo
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
