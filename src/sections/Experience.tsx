import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: 'work',
    title: 'AI Intern',
    company: 'SmartBridge — APSCHE',
    location: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    description: 'Developed CNN models for medical image classification',
    achievements: [
      'Developed and trained a CNN model using TensorFlow for multi-class blood cell classification on 1,000+ images',
      'Implemented preprocessing and augmentation pipelines using ImageDataGenerator',
      'Improved model generalization using Batch Normalization and Dropout techniques',
      'Evaluated model performance using precision-recall curves, F1-score, and confusion matrix',
    ],
    color: '#67E8F9',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'ML Intern',
    company: 'Optern EduWorks',
    location: 'Remote',
    period: 'Jun 2025 – Sep 2025',
    description: 'Built intelligent systems for education technology',
    achievements: [
      'Built a job recommendation engine → 85% accuracy improvement',
      'Automated cover-letter generation for 500+ candidates → 60% time saved',
      'Optimized inference latency by 30% via REST API integration',
    ],
    color: '#F472B6',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'B.Tech in AI & ML',
    company: 'Sreenidhi Institute of Science & Technology',
    location: 'Hyderabad, India',
    period: '2024 – 2027',
    description: 'Pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning',
    achievements: [
      'Specialized in Deep Learning and Reinforcement Learning',
      'Active member of AI/ML research community',
      'Multiple project showcases and hackathon participations',
    ],
    color: '#C084FC',
    icon: GraduationCap,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: '.experience-header',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.experience-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Timeline line animation
      const lineTrigger = ScrollTrigger.create({
        trigger: timelineRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          if (timelineRef.current) {
            timelineRef.current.style.setProperty('--progress', `${self.progress * 100}%`);
          }
        },
      });
      triggersRef.current.push(lineTrigger);

      // Experience cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.experience-card',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.experience-card',
            { opacity: 0, x: (i) => i % 2 === 0 ? -50 : 50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.8, 
              stagger: 0.3, 
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
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="experience-header text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <Briefcase size={16} className="text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">Professional Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional internships and roles in AI/ML
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto" style={{ '--progress': '0%' } as React.CSSProperties}>
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-500/10 transform -translate-x-1/2 hidden md:block">
              <div 
                className="absolute top-0 left-0 w-full transition-all duration-100"
                style={{ 
                  height: 'var(--progress)',
                  background: 'linear-gradient(to bottom, #F472B6, #C084FC)',
                }}
              />
            </div>

            {/* Work Experience Cards */}
            <div className="space-y-12">
              {experiences.filter(exp => exp.type === 'work').map((exp, index) => {
                const Icon = exp.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`experience-card relative flex flex-col md:flex-row items-center gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center border-4"
                        style={{ 
                          background: exp.color,
                          borderColor: '#0f0c15',
                          boxShadow: `0 0 20px ${exp.color}50`,
                        }}
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div 
                        className="glass rounded-2xl p-6 border border-pink-500/10 transition-all duration-300 hover:border-pink-500/30 card-hover"
                        style={{
                          borderLeft: `4px solid ${exp.color}`,
                        }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold font-mono text-white mb-1">
                              {exp.title}
                            </h3>
                            <p style={{ color: exp.color }} className="font-medium">{exp.company}</p>
                          </div>
                          <div 
                            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ background: exp.color }}
                          >
                            <Icon size={18} className="text-white" />
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 
                                size={16} 
                                className="mt-0.5 flex-shrink-0" 
                                style={{ color: exp.color }}
                              />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <GraduationCap size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Academic Background</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic journey in AI & ML
            </p>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.filter(exp => exp.type === 'education').map((exp, index) => {
              const Icon = exp.icon;
              
              return (
                <div
                  key={index}
                  className="experience-card"
                >
                  <div 
                    className="glass rounded-2xl p-8 border border-purple-500/10 transition-all duration-300 hover:border-purple-500/30 card-hover"
                    style={{
                      borderLeft: `4px solid ${exp.color}`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ background: exp.color }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-mono text-white mb-1">
                            {exp.title}
                          </h3>
                          <p style={{ color: exp.color }} className="font-medium text-lg">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6 ml-[72px]">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 ml-[72px]">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-3 ml-[72px]">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 
                            size={18} 
                            className="mt-0.5 flex-shrink-0" 
                            style={{ color: exp.color }}
                          />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
