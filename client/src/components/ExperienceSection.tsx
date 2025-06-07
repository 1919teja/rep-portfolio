import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Site Reliability Engineer",
      company: "GlobalLogic",
      period: "August 2024 – Present",
      color: "text-primary",
      borderColor: "border-primary",
      bgColor: "bg-primary/20",
      responsibilities: [
        "Managing production-grade infrastructure on Azure Kubernetes Service (AKS) using Helm, Terraform, and FluxCD-driven GitOps workflows",
        "Designed and maintained CI/CD pipelines in GitLab, enabling automated container builds and environment-specific deployments",
        "Integrated JFrog Artifactory for artifact storage and versioned Helm repositories",
        "Automated API onboarding and validation for telecom partners using Postman and Bash scripts",
        "Implemented secure ingress traffic routing using Cloudflare DNS and AKS Ingress controllers",
        "Conducted incident management, RCA, and participated in 24/7 on-call rotations"
      ],
      technologies: ["AKS", "Terraform", "FluxCD", "GitLab", "Helm"]
    },
    {
      title: "Site Reliability Engineer",
      company: "Tech Mahindra",
      period: "May 2024 – August 2024",
      color: "text-accent",
      borderColor: "border-accent",
      bgColor: "bg-accent/20",
      responsibilities: [
        "Delivered high-quality Infrastructure as Code (IaC) solutions using Terraform and Ansible across multi-cloud environments",
        "Built and managed CI/CD pipelines using Jenkins to automate provisioning and deployment processes",
        "Troubleshot and resolved complex issues in development, test, and production environments",
        "Ensured 24/7/365 service and infrastructure operations support with continuous optimizations"
      ],
      technologies: ["Terraform", "Ansible", "Jenkins", "AWS"]
    },
    {
      title: "DevOps/SRE Engineer",
      company: "Lotuswave Software Solutions",
      period: "April 2021 – May 2024",
      color: "text-yellow-500",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/20",
      responsibilities: [
        "Managed workloads in AWS, ensuring high availability, disaster recovery, and platform resiliency",
        "Built and maintained CI/CD pipelines using Jenkins and Docker for streamlined deployments",
        "Implemented observability and monitoring with New Relic and Dynatrace to enhance system reliability",
        "Configured Cloudflare for WAF, DDoS protection, and DNS optimization, reducing latency by 30%",
        "Designed HA architectures achieving 99.99% uptime and led performance testing",
        "Managed scalable proxy infrastructure with Nginx, including load balancing and SSL termination"
      ],
      technologies: ["AWS", "Docker", "New Relic", "Cloudflare", "Nginx"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">My journey in Site Reliability Engineering and DevOps</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 md:ml-16">
              <div className={`hidden md:block absolute -left-20 top-8 w-4 h-4 ${experience.bgColor} rounded-full border-4 border-slate-950`}></div>
              <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${experience.color}`}>{experience.title}</h3>
                      <h4 className="text-xl text-slate-300 font-semibold">{experience.company}</h4>
                    </div>
                    <span className="text-slate-400 font-medium">{experience.period}</span>
                  </div>
                  <div className="space-y-3 text-slate-300 mb-4">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <p key={idx}>• {responsibility}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIdx) => (
                      <Badge 
                        key={techIdx} 
                        variant="secondary"
                        className={`${experience.bgColor} ${experience.color} border-0`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
