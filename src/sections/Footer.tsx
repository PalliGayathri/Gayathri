import { Heart, Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-pink-500/10">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-mono">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Gayathri Palli
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
              <Sparkles size={12} className="text-pink-400" />
              AI/ML Engineer | Building Intelligent Systems
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PalliGayathri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/palli-gayathri-1a5105384/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:bapujipalli452@gmail.com"
              className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-110"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-pink-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Gayathri Palli. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-pink-400 fill-pink-400" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
