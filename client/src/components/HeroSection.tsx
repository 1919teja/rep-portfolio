import { Download, ExternalLink, Mail, Phone, Server, Cloud } from "lucide-react";
import {
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiGithub,
  SiGitlab,
  SiLinkedin
} from "react-icons/si";
//import { SiAzuredevops } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


export default function HeroSection() {
  const handleResumeDownload = () => {
    window.location.href = "/api/resume";
  };
  

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-slate-950 to-accent/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">

{/* Professional Avatar */}
<div className="w-32 h-32 mx-auto mb-6">
<Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-primary/20 overflow-hidden rounded-full">
  <img
    src="/attached_assets/profile-pic.jpg"
    alt="Saiteja Kottapally"
    className="w-full h-full object-cover object-center scale-110 transition-transform duration-300"
    loading="lazy"
  />
</Avatar>

</div>

          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Saiteja Kottapally
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-6">
            Site Reliability Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experienced SRE with expertise in cloud infrastructure, DevOps automation, and full-stack observability. 
            Proficient in AWS, Azure, Kubernetes, and building robust CI/CD pipelines for highly available distributed systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/80 text-white px-8 py-3 font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline"
              onClick={handleContactClick}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/1919teja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary text-2xl transition-colors duration-200"
            >
              <SiLinkedin />
            </a>
            <a 
              href="https://github.com/1919teja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary text-2xl transition-colors duration-200"
            >
              <SiGithub />
            </a>
            <a 
              href="mailto:kottapallysaitej@gmail.com"
              className="text-slate-400 hover:text-primary text-2xl transition-colors duration-200"
            >
              <Mail />
            </a>
            <a 
              href="tel:9581876090"
              className="text-slate-400 hover:text-primary text-2xl transition-colors duration-200"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating DevOps Tools */}
<div className="absolute top-20 left-10 text-primary/20 animate-float">
  <SiAmazonwebservices className="text-4xl" title="AWS" />
</div>
<div className="absolute top-40 right-10 text-accent/20 animate-float" style={{ animationDelay: "1s" }}>
  <SiDocker className="text-4xl" title="Docker" />
</div>
<div className="absolute bottom-20 left-20 text-primary/20 animate-float" style={{ animationDelay: "2s" }}>
  <SiKubernetes className="text-4xl" title="Kubernetes" />
</div>
<div className="absolute bottom-10 right-20 text-accent/20 animate-float" style={{ animationDelay: "2.5s" }}>
  <SiJenkins className="text-4xl" title="Jenkins" />
</div>
<div className="absolute top-10 right-40 text-primary/20 animate-float" style={{ animationDelay: "3s" }}>
  <SiTerraform className="text-4xl" title="Terraform" />
</div>
{/* <div className="absolute top-1/2 left-10 text-accent/20 animate-float" style={{ animationDelay: "3.5s" }}>
  <SiAzuredevops className="text-4xl" title="Azure DevOps" />
</div> */}
<div className="absolute bottom-32 right-10 text-primary/20 animate-float" style={{ animationDelay: "4s" }}>
  <SiPrometheus className="text-4xl" title="Prometheus" />
</div>
<div className="absolute top-1/2 right-28 text-accent/20 animate-float" style={{ animationDelay: "4.5s" }}>
  <SiGrafana className="text-4xl" title="Grafana" />
</div>
<div className="absolute top-28 left-1/2 text-primary/20 animate-float" style={{ animationDelay: "5s" }}>
  <SiGithub className="text-4xl" title="GitHub" />
</div>
<div className="absolute bottom-10 left-1/3 text-accent/20 animate-float" style={{ animationDelay: "5.5s" }}>
  <SiGitlab className="text-4xl" title="GitLab" />
</div>

    </section>
  );
}
