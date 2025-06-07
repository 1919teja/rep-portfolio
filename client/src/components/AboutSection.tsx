import { Cloud, Zap, BarChart, Shield, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const achievements = [
    { value: "3+", label: "Years Experience" },
    { value: "99.99%", label: "Uptime Achieved" },
  ];

  const expertiseAreas = [
    { icon: Cloud, label: "Cloud Infrastructure (AWS, Azure)" },
    { icon: Zap, label: "CI/CD Pipeline Automation" },
    { icon: BarChart, label: "Monitoring & Observability" },
    { icon: Shield, label: "Security & Compliance" },
    { icon: Settings, label: "Infrastructure as Code" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Site Reliability Engineer with over 3 years of experience building and maintaining 
              highly available, scalable cloud infrastructure. My expertise spans across cloud platforms, 
              containerization, automation, and observability.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in designing robust CI/CD pipelines, implementing Infrastructure as Code, and ensuring 
              99.99% uptime for production systems. My experience includes managing Kubernetes clusters, 
              optimizing performance, and leading incident response for distributed microservices.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">{achievement.value}</h3>
                    <p className="text-slate-300">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Core Expertise</h3>
              <div className="space-y-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <area.icon className="text-primary text-xl flex-shrink-0" />
                    <span className="text-slate-300">{area.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
