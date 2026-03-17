import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Target, Lightbulb, Rocket, Heart, Code2, Trophy, BookOpen, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const passions = [
  { 
    icon: Brain, 
    title: 'Deep Learning', 
    desc: 'Building neural networks that learn and adapt',
    color: '#E91E63'
  },
  { 
    icon: Car, 
    title: 'Autonomous Systems', 
    desc: 'Creating self-driving agents with RL',
    color: '#9C27B0'
  },
  { 
    icon: Sparkles, 
    title: 'LLMs & RAG', 
    desc: 'Crafting intelligent document systems',
    color: '#FF5722'
  },
  { 
    icon: Eye, 
    title: 'Computer Vision', 
    desc: 'Teaching machines to see and understand',
    color: '#673AB7'
  },
];

const stats = [
  { icon: Code2, value: '500+', label: 'Problems Solved', color: '#E91E63' },
  { icon: Trophy, value: '6+', label: 'Major Projects', color: '#9C27B0' },
  { icon: BookOpen, value: '∞', label: 'Continuous Learner', color: '#FF5722' },
  { icon: GraduationCap, value: 'B.Tech', label: 'AI & ML Degree', color: '#673AB7' },
];

// Import icons
import { Brain, Car, Eye } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.about-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.about-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Profile card animation
      const profileTrigger = ScrollTrigger.create({
        trigger: '.profile-card',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.profile-card',
            { opacity: 0, x: -80, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(profileTrigger);

      // Content animation
      const contentTrigger = ScrollTrigger.create({
        trigger: '.about-content',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.about-content',
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
          );
        },
        once: true
      });
      triggersRef.current.push(contentTrigger);

      // Passion cards animation
      const passionTrigger = ScrollTrigger.create({
        trigger: '.passion-cards',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.passion-card',
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
          );
        },
        once: true
      });
      triggersRef.current.push(passionTrigger);

      // Stats animation
      const statsTrigger = ScrollTrigger.create({
        trigger: '.stats-grid',
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo('.stat-card',
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' }
          );
        },
        once: true
      });
      triggersRef.current.push(statsTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Heart size={16} className="text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, I'm Gayathri
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate AI/ML Engineer who loves turning complex problems into elegant solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image Card */}
          <div className="profile-card relative">
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Gayathri Palli"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4 border border-pink-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">AI/ML Engineer</p>
                      <p className="text-xs text-pink-300">Building the future</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content space-y-6">
            <div className="glass rounded-2xl p-8 border border-pink-500/10">
              <h3 className="text-2xl font-bold font-mono mb-4 text-white flex items-center gap-2">
                <Lightbulb size={24} className="text-pink-400" />
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a <span className="text-pink-300 font-medium">B.Tech student in AI & ML</span> at 
                Sreenidhi Institute of Science & Technology, driven by a burning passion for creating 
                intelligent systems that make a real difference. My journey began with a simple curiosity: 
                How can machines learn and evolve?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, I specialize in <span className="text-purple-300 font-medium">Machine Learning</span>, 
                <span className="text-pink-300 font-medium"> Deep Learning</span>, 
                <span className="text-purple-300 font-medium"> Autonomous Systems</span>, and 
                <span className="text-pink-300 font-medium"> GenAI</span>. I bridge the gap between complex 
                research and real-world deployment, whether it's architecting RAG pipelines or training 
                self-driving agents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not training neural networks or debugging code, you'll find me exploring the latest 
                research papers, competing in hackathons, or sharpening my logic by solving 500+ LeetCode 
                problems. I don't just build models; I build solutions that actually work.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 border border-pink-500/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <Target size={20} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Goal-Oriented</p>
                  <p className="text-xs text-muted-foreground">Results driven</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 border border-purple-500/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Rocket size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Fast Learner</p>
                  <p className="text-xs text-muted-foreground">Always growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passion Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono text-center mb-8 text-white">
            What Drives Me <span className="text-pink-400">✨</span>
          </h3>
          <div className="passion-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, index) => {
              const Icon = passion.icon;
              return (
                <div
                  key={index}
                  className="passion-card glass rounded-xl p-6 border border-pink-500/10 transition-all duration-300 hover:border-pink-500/30 hover:scale-105 group"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${passion.color}15` }}
                  >
                    <Icon size={28} style={{ color: passion.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{passion.title}</h4>
                  <p className="text-sm text-muted-foreground">{passion.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card glass rounded-xl p-6 text-center border border-pink-500/10 transition-all duration-300 hover:border-pink-500/30"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${stat.color}15` }}
                >
                  <Icon size={24} style={{ color: stat.color }} />
                </div>
                <div 
                  className="text-2xl md:text-3xl font-bold font-mono mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-pink-500/10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">"</span>
            </div>
            <p className="text-xl md:text-2xl font-mono text-white leading-relaxed italic">
              The best way to predict the future is to <span className="text-pink-400">invent it</span>.
            </p>
            <p className="text-muted-foreground mt-4">— Alan Kay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
