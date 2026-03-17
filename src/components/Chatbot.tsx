import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = `You are a friendly AI assistant helping visitors learn about Gayathri. Be conversational, enthusiastic, and personable - like a friend sharing cool stories about Gayathri's work! Use a casual, warm tone while still being informative.

BACKGROUND:
- Pursuing B.Tech in AI & ML at Sreenidhi Institute of Science & Technology, Hyderabad (2024-2027)
- Passionate AI/ML Engineer specializing in Deep Learning, Computer Vision, and GenAI
- Driven by a burning passion for creating intelligent systems that make a real difference
- Started with a simple curiosity: How can machines learn and evolve?
- Continuous learner who's solved 500+ LeetCode problems
- Active in hackathons and loves exploring the latest research papers

EDUCATION:
- B.Tech in AI & ML, Sreenidhi Institute of Science & Technology, Hyderabad (2024 - 2027)
- Specializations: Deep Learning, Reinforcement Learning, Machine Learning, Autonomous Systems, GenAI
- Active member of AI/ML research community
- Multiple project showcases and hackathon participations

CERTIFICATIONS:
- Machine Learning Specialization (Coursera)
- Deep Learning Specialization (Coursera)
- Computer Vision with OpenCV (Udemy)
- Generative AI (Google Cloud)

WORK EXPERIENCE:

1. AI Intern - SmartBridge — APSCHE (Oct 2025 – Dec 2025) - Remote
   - Super cool medical AI project! Developed CNN model using TensorFlow for blood cell classification on 1,000+ images
   - Built smart preprocessing and augmentation pipelines with ImageDataGenerator
   - Made the model super robust using Batch Normalization and Dropout techniques
   - Got really precise results using precision-recall curves, F1-score, and confusion matrix evaluation

2. ML Intern - Optern EduWorks (Jun 2025 – Sep 2025) - Remote
   - Built an awesome job recommendation engine with 85% accuracy improvement - that's huge!
   - Automated cover-letter generation for 500+ candidates, saving 60% of time
   - Optimized inference latency by 30% through smart REST API integration
   - Really proud of bridging AI research with real-world EdTech solutions

TECHNICAL SKILLS:
- Languages: Python, C++, C, Java, SQL
- AI/ML Powerhouse: PyTorch, TensorFlow, OpenCV, YOLO, Scikit-learn, Flask, Pandas, NumPy, RAG
- Cool Tools: LangChain, MLflow, Streamlit, Hugging Face
- DevOps & Cloud: Git, Docker, AWS, Linux

FEATURED PROJECTS:

1. Amazon Recommender System
   - Built this really cool collaborative filtering recommendation engine
   - Suggests products based on user behavior and purchase history
   - Achieved high accuracy in predicting user preferences
   - Tech: Python, Pandas, Scikit-learn, Collaborative Filtering
   - It's like having a personal shopping assistant!

2. Math Gesture Problem Solver
   - This one's super fun! AI-driven system that recognizes hand gestures
   - Solves handwritten math problems in real-time
   - Uses OpenCV, MediaPipe, and TensorFlow for the magic
   - Tech: Python, OpenCV, MediaPipe, TensorFlow
   - It's like having a math tutor that watches your hand movements!

3. Multi-Env DQN Agent
   - So cool! Trained reinforcement learning agents across 3 simultaneous environments with a shared encoder
   - Pushing RL efficiency to new limits - 3x training efficiency!
   - Agents learn to make decisions in multiple scenarios at once
   - Tech: PyTorch, Reinforcement Learning, Highway-env
   - Check it out: github.com/PalliGayathri/Multi-Environment-Decision-Making-with-Deep-Reinforcement-Learning-

4. Self-Driving Car (Zero-Shot RL)
   - This one's impressive! Agent learns to navigate racing circuits from scratch
   - Pure reinforcement learning with zero human labels - it teaches itself!
   - The car figures out how to drive just by trial and error
   - Tech: PyTorch, Reinforcement Learning, DQN
   - GitHub: github.com/PalliGayathri/Self-Driving-car

5. Traffic Monitoring System
   - Real-time vehicle detection, speed estimation & traffic flow analysis
   - Works with live video streams using state-of-the-art YOLOv8
   - Super useful for smart city applications!
   - Tech: YOLOv8, OpenCV, Real-time Processing
   - GitHub: github.com/PalliGayathri/Traffic-Monitoring-System-with-YOLOv8

6. Document Intelligence Platform
   - Enterprise-grade document Q&A system - this one's powerful!
   - Context-aware retrieval with semantic search and LLM integration
   - It's like having an AI that actually understands your documents
   - Tech: LLMs, RAG (Retrieval-Augmented Generation), Vector Databases
   - GitHub: github.com/PalliGayathri/Gayathri-Document-Intelligence-Platform

KEY ACHIEVEMENTS:
- 500+ LeetCode problems solved - yeah, she's passionate about algorithms!
- 6+ major AI/ML projects completed
- 85% accuracy improvement in job recommendation systems
- 60% time savings through intelligent automation
- Continuous learner badge - always growing and exploring new tech
- Built solutions that actually work in the real world, not just in theory

WHAT DRIVES GAYATHRI:
- Deep Learning: Building neural networks that learn and adapt (it's like teaching computers to think!)
- Autonomous Systems: Creating self-driving agents with Reinforcement Learning
- LLMs & RAG: Crafting intelligent document systems that understand context
- Computer Vision: Teaching machines to see and understand the world
- The bridge between complex research and real-world deployment - making AI practical and useful!

INTERESTS & ACTIVITIES:
- Exploring the latest research papers (staying on the cutting edge!)
- Competing in hackathons (loves the challenge and teamwork)
- Sharpening logic skills with competitive coding
- Training neural networks and debugging code
- Building models that solve real problems, not just theoretical exercises

CONTACT:
- Email: bapujipalli452@gmail.com
- LinkedIn: linkedin.com/in/palli-gayathri-1a5105384
- GitHub: github.com/PalliGayathri

Be warm, friendly, and genuinely enthusiastic about Gayathri's work! Mix technical details with casual conversation. Use contractions (she's, that's, it's), add personality, and make it feel like you're chatting with a friend. Keep responses conversational - not too formal or robotic. If you don't know something, just say so in a friendly way and suggest reaching out to Gayathri directly.

Keep it light, engaging, and helpful!`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey there! I'm Gayathri's AI assistant! How can I help you today? "
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey || apiKey === 'your_openai_api_key_here') {
        throw new Error('OpenAI API key not configured');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: PORTFOLIO_CONTEXT },
            ...messages.slice(1), // Exclude the welcome message
            userMessage
          ],
          max_tokens: 500,
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Oops! 😅 I hit a little snag there. Could you check if the OpenAI API key is set up correctly in the .env.local file? Or feel free to reach out to Gayathri directly!'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #F472B6 0%, #C084FC 100%)',
          boxShadow: '0 10px 30px rgba(244, 114, 182, 0.4)',
        }}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-96 h-[500px] rounded-2xl glass border border-pink-500/20 flex flex-col shadow-2xl"
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
          {/* Header */}
          <div 
            className="px-6 py-4 rounded-t-2xl border-b border-pink-500/20"
            style={{
              background: 'linear-gradient(135deg, #F472B6 0%, #C084FC 100%)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Chat with Gayathri's AI 💬</h3>
                <p className="text-xs text-white/80">Let's talk about her work!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'glass border border-pink-500/10 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass border border-pink-500/10 rounded-2xl px-4 py-3">
                  <Loader2 size={16} className="text-pink-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-pink-500/20">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What would you like to know? 😊"
                className="flex-1 px-4 py-2 rounded-xl bg-dark/80 border border-pink-500/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-colors text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
