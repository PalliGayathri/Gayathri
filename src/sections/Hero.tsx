import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ChevronDown, Linkedin, Github, Mail } from 'lucide-react';

const typingTexts = [
  "Deep Learning",
  "Gen AI",
  "Machine Learning",
  "Autonomous Systems",
  "LLM & RAG Architect",
  "Building Intelligent Systems"
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile image animation
      gsap.fromTo(profileRef.current,
        { opacity: 0, scale: 0.5, rotateY: 90 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 1.2, delay: 0.2, ease: "back.out(1.7)" }
      );

      // Name animation
      gsap.fromTo(nameRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "expo.out" }
      );

      // Social links animation
      gsap.fromTo('.social-link-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.2, stagger: 0.1, ease: "power2.out" }
      );

      // CTA button animation
      gsap.fromTo('.cta-button',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.4, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      gsap.to(profileRef.current, {
        rotateY: xPercent * 10,
        rotateX: -yPercent * 10,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#F472B6' : '#C084FC',
              opacity: 0.4,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Decorative stars */}
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={`star-${i}`}
            className="absolute text-pink-400/30 animate-pulse"
            size={16 + Math.random() * 16}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Image */}
          <div className="relative mb-10">
            <div
              ref={profileRef}
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 60px rgba(244, 114, 182, 0.3), 0 0 100px rgba(192, 132, 252, 0.2)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Gayathri Palli"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/10" />
              
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-pink-400/30" />
              <div className="absolute -inset-6 rounded-full border border-purple-400/20" />
            </div>
          </div>

          {/* Greeting */}
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-pink-400" />
            <span className="text-pink-300 font-medium">Welcome to my portfolio</span>
            <Sparkles size={18} className="text-purple-400" />
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gayathri Palli
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-pink-200/80 mb-3 font-mono">
            AI/ML Engineer
          </p>

          {/* Typing Animation */}
          <div className="h-12 flex items-center justify-center mb-10">
            <span
              className="text-lg md:text-xl font-mono typing-cursor"
              style={{ color: '#C084FC' }}
            >
              {displayText}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-10">
            <a
              href="https://www.linkedin.com/in/palli-gayathri-1a5105384/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-hero w-12 h-12 rounded-xl flex items-center justify-center glass border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/PalliGayathri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-hero w-12 h-12 rounded-xl flex items-center justify-center glass border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:bapujipalli452@gmail.com"
              className="social-link-hero w-12 h-12 rounded-xl flex items-center justify-center glass border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="cta-button px-8 py-4 rounded-xl font-mono font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F472B6 0%, #C084FC 100%)',
              boxShadow: '0 10px 30px rgba(244, 114, 182, 0.4)',
            }}
          >
            Explore My Work
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
