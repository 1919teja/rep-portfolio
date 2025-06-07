import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://linkedin.com/in/1919teja",
      label: "LinkedIn"
    },
    {
      icon: SiGithub,
      href: "https://github.com/1919teja",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:kottapallysaitej@gmail.com",
      label: "Email"
    },
    {
      icon: Globe,
      href: "https://thesaiteja.loopout.in",
      label: "Website"
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">© 2024 Saiteja Kottapally. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-slate-400 hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
