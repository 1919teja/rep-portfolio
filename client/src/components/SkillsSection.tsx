import { Cloud, Settings, Zap, BarChart, Code, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: ["AWS", "Azure", "GCP", "Heroku"]
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "ArgoCD", "Helm"]
    },
    {
      icon: Zap,
      title: "CI/CD Pipelines",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
      skills: ["Jenkins", "GitLab CI", "Azure DevOps", "CodeDeploy"]
    },
    {
      icon: BarChart,
      title: "Monitoring & APM",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
      skills: ["New Relic", "Dynatrace", "Prometheus", "Grafana", "ELK Stack", "DataDog"]
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      skills: ["Python", "Bash", "JavaScript", "Django", "React"]
    },
    {
      icon: Shield,
      title: "Security & Networking",
      color: "text-red-500",
      bgColor: "bg-red-500/20",
      skills: ["Cloudflare WAF", "TLS/SSL", "VPN", "DNS", "Load Balancers"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Competencies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across modern DevOps and Site Reliability Engineering technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`text-3xl ${category.color} mr-4`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.bgColor} ${category.color} border-0`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
