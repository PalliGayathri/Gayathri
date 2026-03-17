import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Award, Send, Linkedin, Mail, ExternalLink, CheckCircle2, Sparkles, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: 'Machine Learning Specialization', provider: 'Coursera', color: '#F472B6' },
  { name: 'Deep Learning Specialization', provider: 'Coursera', color: '#C084FC' },
  { name: 'Computer Vision with OpenCV', provider: 'Udemy', color: '#67E8F9' },
  { name: 'Generative AI', provider: 'Google Cloud', color: '#FB7185' },
];

export default function StatsContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.certs-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.certs-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Certifications animation
      const certsTrigger = ScrollTrigger.create({
        trigger: '.certs-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.cert-card',
            { opacity: 0, scale: 0.8, y: 30 },
            { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              duration: 0.5, 
              stagger: 0.1, 
              ease: 'back.out(1.7)' 
            }
          );
        },
        once: true
      });
      triggersRef.current.push(certsTrigger);

      // Contact form animation
      const formTrigger = ScrollTrigger.create({
        trigger: '.contact-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.contact-form',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(formTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Certifications Section */}
        <div className="certs-header text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Sparkles size={16} className="text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and specialized training in AI & ML
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card glass rounded-xl p-6 border border-pink-500/10 transition-all duration-300 hover:border-pink-500/30 card-hover"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}15` }}
                >
                  <Award size={24} style={{ color: cert.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Heart size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Always open to collaborations, research discussions, and exciting AI projects!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="glass rounded-2xl p-8 border border-pink-500/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono text-pink-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark/80 border border-pink-500/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-colors"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-mono text-pink-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark/80 border border-pink-500/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-colors"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-mono text-pink-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-dark/80 border border-pink-500/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-colors resize-none"
                      placeholder="I'd love to hear about your project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`w-full py-4 rounded-lg font-mono font-medium flex items-center justify-center gap-2 transition-all ${
                      submitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : submitted ? (
                      <>
                        <CheckCircle2 size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-bold font-mono mb-4 text-white">
                  Let's Chat!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently open to new opportunities, collaborations, and interesting projects. 
                  Whether you're a recruiter, researcher, or fellow developer, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/palli-gayathri-1a5105384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-pink-500/10 transition-all hover:border-pink-500/30 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0077B5]/10 flex items-center justify-center">
                    <Linkedin size={24} className="text-[#0077B5]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect professionally</div>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-pink-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/PalliGayathri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-pink-500/10 transition-all hover:border-pink-500/30 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                    <Github size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">GitHub</div>
                    <div className="text-sm text-muted-foreground">Explore my repositories</div>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-pink-400 transition-colors" />
                </a>

                <a
                  href="mailto:bapujipalli452@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-pink-500/10 transition-all hover:border-pink-500/30 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#D14836]/10 flex items-center justify-center">
                    <Mail size={24} className="text-[#D14836]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">Email</div>
                    <div className="text-sm text-muted-foreground">bapujipalli452@gmail.com</div>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-pink-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
