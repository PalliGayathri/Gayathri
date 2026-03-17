import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Car, Eye, FileText, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Deep Reinforcement Learning',
    description: 'Designing DQN variants and multi-environment training pipelines — teaching agents to learn, adapt, and perform.',
    skills: ['DQN', 'PPO', 'Multi-Agent', 'Highway-env'],
    color: '#F472B6',
    gradient: 'from-pink-400/20 to-pink-400/5',
  },
  {
    icon: Car,
    title: 'Autonomous Systems',
    description: 'Self-driving agents powered by computer vision and RL — from simulation to real-world navigation.',
    skills: ['Self-Driving', 'Path Planning', 'Sensor Fusion', 'Simulation'],
    color: '#C084FC',
    gradient: 'from-purple-400/20 to-purple-400/5',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Real-time object detection with YOLO, video analytics, speed estimation, and traffic monitoring systems.',
    skills: ['YOLOv8', 'OpenCV', 'Real-time', 'Video Analytics'],
    color: '#67E8F9',
    gradient: 'from-cyan-400/20 to-cyan-400/5',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'RAG-powered enterprise Q&A systems with LLM integration, vector DBs, and semantic search.',
    skills: ['LLMs', 'RAG', 'Vector DB', 'Streamlit'],
    color: '#FB7185',
    gradient: 'from-rose-400/20 to-rose-400/5',
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.expertise-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.expertise-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.expertise-grid',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.expertise-card',
            { opacity: 0, y: 60, scale: 0.95 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.7, 
              stagger: 0.15, 
              ease: 'power3.out' 
            }
          );
        },
        once: true
      });
      triggersRef.current.push(cardsTrigger);
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
      id="expertise"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="expertise-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Sparkles size={16} className="text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">What I Do</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What I Build
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming complex AI research into production-ready solutions
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-grid grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="expertise-card group relative"
              >
                <div 
                  className={`relative h-full bg-gradient-to-br ${area.gradient} rounded-2xl border border-pink-500/10 p-8 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden`}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${area.color}15, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ 
                        background: `${area.color}15`,
                        border: `1px solid ${area.color}30`,
                      }}
                    >
                      <Icon size={32} style={{ color: area.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold font-mono mb-4 text-white group-hover:text-pink-200 transition-colors">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            background: `${area.color}12`,
                            color: area.color,
                            border: `1px solid ${area.color}25`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: area.color }}>
                      <span>Explore</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
