import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kottapallysaitej@gmail.com",
      href: "mailto:kottapallysaitej@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9581876090",
      href: "tel:9581876090"
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/1919teja",
      href: "https://linkedin.com/in/1919teja"
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "github.com/1919teja",
      href: "https://github.com/1919teja"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">Let's discuss opportunities and collaborate on interesting projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <contact.icon className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{contact.label}</p>
                      <a 
                        href={contact.href} 
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-300 hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-slate-300 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-slate-300 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-slate-300 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-slate-300 focus:ring-primary focus:border-primary resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
