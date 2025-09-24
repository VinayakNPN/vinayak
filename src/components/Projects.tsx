import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Zap, Brain, Shield, BookOpen, Code, Blocks } from 'lucide-react';

// Import project images
import genAiImg from '../assets/projects/gen-ai-model.jpg';
import sCureImg from '../assets/projects/s-cure.jpg';
import neuralNetworkImg from '../assets/projects/neural-network.jpg';
import studyBuddyImg from '../assets/projects/study-buddy.jpg';
import cHeaderImg from '../assets/projects/c-header.jpg';
import web3ProjectImg from '../assets/projects/web3-project.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'GEN-AI Model from Scratch',
      description: 'Built a Generative Adversarial Network (GAN) in Python to generate synthetic MNIST dataset samples.',
      longDescription: 'A comprehensive implementation of GAN architecture from scratch, demonstrating deep understanding of generator-discriminator dynamics, loss functions, and training stability. The project includes detailed documentation of the mathematical foundations and optimization techniques used.',
      image: genAiImg,
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
      githubUrl: 'https://github.com/VinayakNPN/Built-GAN-from-Scratch',
      liveUrl: '',
      icon: Brain,
      category: 'AI/ML'
    },
    {
      title: 'S-CURE',
      description: 'Designed and implemented a Skin disease Prediction Model based on Image input for early detection.',
      longDescription: 'An intelligent healthcare solution using computer vision and deep learning for early skin disease detection. The system processes dermatological images and provides accurate diagnostic predictions with confidence scores.',
      image: sCureImg,
      technologies: ['Python', 'Keras', 'OpenCV', 'Streamlit'],
      githubUrl: 'https://github.com/VinayakNPN/scure_app',
      liveUrl: '',
      icon: Shield,
      category: 'Healthcare AI'
    },
    {
      title: 'Neural Network from Scratch',
      description: 'Currently developing a Neural Network from scratch without using pre-built libraries.',
      longDescription: 'A educational project focused on understanding the core mathematics of neural networks. Implementation includes forward propagation, backpropagation, gradient descent, and various activation functions - all built from fundamental mathematical operations.',
      image: neuralNetworkImg,
      technologies: ['Python', 'NumPy', 'Mathematics'],
      githubUrl: 'https://github.com/VinayakNPN/Built-My-Own-Neural-Network-From-Scratch',
      liveUrl: '',
      icon: Code,
      category: 'Educational'
    },
    {
      title: 'Study-Buddy',
      description: 'Developed an AI-Powered Study Companion leveraging Gemini for intelligent study assistance.',
      longDescription: 'An innovative educational platform that uses Google Gemini AI to provide personalized study support, automated note summarization, and intelligent question generation. Features include adaptive learning paths and progress tracking.',
      image: studyBuddyImg,
      technologies: ['Python', 'Gemini AI', 'Streamlit', 'NLP'],
      githubUrl: 'https://github.com/VinayakNPN/Study-Buddy',
      liveUrl: '',
      icon: BookOpen,
      category: 'Education Tech'
    },
    {
      title: 'C Header Library',
      description: 'Created a reusable C header library offering number theory utilities and mathematical functions.',
      longDescription: 'A comprehensive C library providing optimized implementations of number theory algorithms including prime detection, factorial computation, and perfect number identification. Emphasizes clean code practices and extensive documentation.',
      image: cHeaderImg,
      technologies: ['C', 'Mathematics', 'Algorithm Design'],
      githubUrl: 'https://github.com/VinayakNPN/Logical-C-lang-Header-File',
      liveUrl: '',
      icon: Blocks,
      category: 'System Programming'
    },
    {
      title: 'Web3 Innovation Project',
      description: 'Blockchain-based application showcasing decentralized technology implementation.',
      longDescription: 'A cutting-edge Web3 project demonstrating blockchain integration, smart contract development, and decentralized application (DApp) architecture. Features include tokenization, consensus mechanisms, and distributed ledger technology.',
      image: web3ProjectImg,
      technologies: ['Solidity', 'JavaScript', 'Blockchain', 'DeFi'],
      githubUrl: 'https://github.com/VinayakNPN/chat-dapp',
      liveUrl: '',
      icon: Zap,
      category: 'Blockchain'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="glass rounded-2xl overflow-hidden hover-lift">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-muted-foreground hover:text-foreground rounded-lg transition-colors focus-visible-ring"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg transition-colors hover:bg-primary/90 focus-visible-ring"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      {React.createElement(projects[selectedProject].icon, { className: "w-8 h-8 text-primary" })}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {projects[selectedProject].title}
                        </h3>
                        <p className="text-primary font-medium">
                          {projects[selectedProject].category}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {projects[selectedProject].longDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      {projects[selectedProject].githubUrl && (
                        <a
                          href={projects[selectedProject].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors focus-visible-ring"
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                      )}
                      {projects[selectedProject].liveUrl && (
                        <a
                          href={projects[selectedProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-visible-ring"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;