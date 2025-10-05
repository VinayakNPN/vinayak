import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi — I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vinayak Chouhan
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              B.Tech CSE — an AI enthusiastic Tech Speaker
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-elevation-2 hover-lift focus-visible-ring"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-xl shadow-elevation-1 hover-lift focus-visible-ring"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://github.com/VinayakNPN"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-lift focus-visible-ring"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vinayak-chouhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-lift focus-visible-ring"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vinayakchouhanonwork@gmail.com"
                className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hover-lift focus-visible-ring"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image with Creative Gradients */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              {/* Main image container with gradient overlays */}
              <div className="relative w-80 h-[500px] md:w-96 md:h-[600px] rounded-3xl overflow-hidden shadow-elevation-3 hover-lift">
                {/* Background gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 z-0" />
                
                {/* Image */}
                <img 
                  src={heroImage} 
                  alt="Vinayak Chouhan presenting at a tech event"
                  className="w-full h-full object-cover object-center relative z-10 transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-20" />
                
                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="space-y-2"
                  >
                    <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold shadow-glow">
                      💡 Tech Speaker & Developer
                    </div>
                    <p className="text-xs text-muted-foreground/80">Presenting innovative solutions</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Animated gradient rings */}
              <div className="absolute -inset-4 -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse" />
              </div>
              
              {/* Secondary glow effect */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl scale-110 opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded-full p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -2 }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 animate-bounce-gentle" />
      </motion.button>
    </section>
  );
};

export default Hero;