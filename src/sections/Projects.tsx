import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Sparkles, ShoppingCart, Hand } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Amazon Recommender System',
    description: 'Built a collaborative filtering-based recommendation engine that suggests products based on user behavior and purchase history. Achieved high accuracy in predicting user preferences.',
    image: '/project-recommender.jpg',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
    impact: 'Smart Recommendations',
    github: '.',
    color: '#FF6B9D',
    icon: ShoppingCart,
  },
  {
    title: 'Math Gesture Problem Solver',
    description: 'An AI-powered assistant that recognizes hand gestures to solve mathematical problems in real-time. Combines computer vision with gesture recognition for an interactive learning experience.',
    image: '/project-math-gesture.jpg',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    impact: 'Gesture Recognition',
    github: '.',
    color: '#C084FC',
    icon: Hand,
  },
  {
    title: 'Multi-Env DQN Agent',
    description: 'Trained agents across 3 simultaneous environments with a shared encoder — pushing RL efficiency to new limits.',
    image: '/project-dqn.jpg',
    tech: ['PyTorch', 'RL', 'Highway-env'],
    impact: '3x Training Efficiency',
    github: 'https://github.com/PalliGayathri/Multi-Environment-Decision-Making-with-Deep-Reinforcement-Learning-',
    color: '#F472B6',
    icon: Sparkles,
  },
  {
    title: 'Self-Driving Car (Zero-Shot RL)',
    description: 'Agent learns to navigate racing circuits from scratch — pure reinforcement learning with zero human labels.',
    image: '/project-autonomous.jpg',
    tech: ['PyTorch', 'RL', 'DQN'],
    impact: 'Zero-Shot Learning',
    github: 'https://github.com/PalliGayathri/Self-Driving-car',
    color: '#FB7185',
    icon: Sparkles,
  },
  {
    title: 'Traffic Monitoring System',
    description: 'Vehicle detection, speed estimation & traffic flow analysis in live video streams using YOLOv8.',
    image: '/project-traffic.jpg',
    tech: ['YOLOv8', 'OpenCV', 'Real-time'],
    impact: 'Real-time Analytics',
    github: 'https://github.com/PalliGayathri/Traffic-Monitoring-System-with-YOLOv8',
    color: '#A78BFA',
    icon: Sparkles,
  },
  {
    title: 'Document Intelligence Platform',
    description: 'Enterprise-grade document Q&A with context-aware retrieval, semantic search, and LLM integration.',
    image: '/project-document.jpg',
    tech: ['LLMs', 'RAG', 'Vector DB'],
    impact: 'Enterprise Ready',
    github: 'https://github.com/PalliGayathri/Gayathri-Document-Intelligence-Platform',
    color: '#67E8F9',
    icon: Sparkles,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.projects-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.projects-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Project cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.projects-grid',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.project-card',
            { opacity: 0, y: 80, scale: 0.95 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.8, 
              stagger: 0.1, 
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
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work in AI, ML, and intelligent systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="project-card group relative rounded-2xl overflow-hidden border border-pink-500/10 bg-gradient-to-br from-dark-card to-dark transition-all duration-500 hover:border-pink-500/30"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: `linear-gradient(to top, ${project.color}40, transparent)`,
                    }}
                  />
                  
                  {/* Impact Badge */}
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm"
                    style={{
                      background: `${project.color}30`,
                      border: `1px solid ${project.color}50`,
                      color: project.color,
                    }}
                  >
                    <Sparkles size={12} />
                    {project.impact}
                  </div>

                  {/* Icon overlay */}
                  <div 
                    className="absolute bottom-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                    style={{
                      background: `${project.color}30`,
                      border: `1px solid ${project.color}50`,
                    }}
                  >
                    <Icon size={20} style={{ color: project.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold font-mono mb-2 text-white group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-mono"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}40`,
                      }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{
                        background: 'transparent',
                        color: project.color,
                        border: `1px solid ${project.color}40`,
                      }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  </div>
                </div>

                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 60px ${project.color}15`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/PalliGayathri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-medium transition-all hover:scale-105 border border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
