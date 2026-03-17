import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', color: '#F472B6', icon: '🐍' },
      { name: 'C++', color: '#C084FC', icon: '⚡' },
      { name: 'C', color: '#67E8F9', icon: '🔧' },
      { name: 'Java', color: '#FB7185', icon: '☕' },
      { name: 'SQL', color: '#A78BFA', icon: '📊' },
    ],
  },
  {
    name: 'AI/ML Frameworks',
    skills: [
      { name: 'PyTorch', color: '#F472B6', icon: '🔥' },
      { name: 'TensorFlow', color: '#C084FC', icon: '🧠' },
      { name: 'OpenCV', color: '#FB7185', icon: '👁️' },
      { name: 'YOLO', color: '#A78BFA', icon: '🎯' },
      { name: 'Scikit-learn', color: '#67E8F9', icon: '📈' },
      { name: 'Flask', color: '#FB7185', icon: '🌶️' },
      { name: 'Pandas', color: '#F472B6', icon: '🐼' },
      { name: 'NumPy', color: '#C084FC', icon: '🔢' },
      { name: 'RAG', color: '#A78BFA', icon: '📚' },
    ],
  },
  {
    name: 'Tools & Libraries',
    skills: [
      { name: 'LangChain', color: '#F472B6', icon: '🔗' },
      { name: 'MLflow', color: '#C084FC', icon: '📋' },
      { name: 'Streamlit', color: '#67E8F9', icon: '🌊' },
      { name: 'Hugging Face', color: '#A78BFA', icon: '🤗' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Git', color: '#F472B6', icon: '🌿' },
      { name: 'Docker', color: '#C084FC', icon: '🐳' },
      { name: 'AWS', color: '#67E8F9', icon: '☁️' },
      { name: 'Linux', color: '#FB7185', icon: '🐧' },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.tech-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.tech-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Category cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.tech-categories',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.tech-category',
            { opacity: 0, scale: 0.9, y: 40 },
            { 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              duration: 0.6, 
              stagger: 0.12, 
              ease: 'power3.out' 
            }
          );
        },
        once: true
      });
      triggersRef.current.push(cardsTrigger);

      // Skill nodes animation
      const nodesTrigger = ScrollTrigger.create({
        trigger: '.tech-categories',
        start: 'top 70%',
        onEnter: () => {
          gsap.fromTo('.skill-node',
            { opacity: 0, scale: 0.8, y: 20 },
            { 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              duration: 0.4, 
              stagger: 0.04, 
              ease: 'back.out(1.5)',
              delay: 0.4
            }
          );
        },
        once: true
      });
      triggersRef.current.push(nodesTrigger);
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
      id="techstack"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="tech-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">My Toolkit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>
        </div>

        {/* Tech Categories */}
        <div className="tech-categories grid md:grid-cols-2 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="tech-category glass rounded-2xl p-6 border border-pink-500/10"
            >
              {/* Category Header */}
              <h3 className="text-xl font-bold font-mono mb-6 text-white flex items-center gap-3">
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ 
                    background: category.skills[0].color,
                    boxShadow: `0 0 10px ${category.skills[0].color}`,
                  }}
                />
                {category.name}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-node group relative px-4 py-3 rounded-xl border border-pink-500/10 bg-dark/50 transition-all duration-300 hover:border-pink-500/30 hover:scale-105 cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{skill.icon}</span>
                      <span 
                        className="font-mono text-sm font-medium"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        boxShadow: `0 0 20px ${skill.color}30`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-500/30" />
            <span className="font-mono text-sm">Always learning new technologies</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
