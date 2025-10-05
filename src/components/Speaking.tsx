import React from 'react';
import { motion } from 'framer-motion';

// Import speaking event images (new images first)
import event7Img from '../assets/speaking/event7.jpg';
import event8Img from '../assets/speaking/event8.jpg';
import event1Img from '../assets/speaking/event1.jpg';
import event2Img from '../assets/speaking/event2.jpg';
import event3Img from '../assets/speaking/event3.jpg';
import event4Img from '../assets/speaking/event4.jpg';
import event5Img from '../assets/speaking/event5.jpg';
import event6Img from '../assets/speaking/event6.jpg';

const Speaking = () => {
  const events = [
    {
      title: 'University Guest Lecture',
      event: 'LinkedIn, Github & Resume Essentials',
      image: event7Img,
      badge: '🎓 Academic Session'
    },
    {
      title: 'University Guest Lecture',
      event: 'LinkedIn, Github & Resume Essentials',
      image: event8Img,
      badge: '🎓 Academic Session'
    },
    {
      title: 'Web3 & BlockChain ',
      event: 'Induction MITM',
      image: event1Img,
      badge: '🤖 WEb3 Speaker'
    },
    {
      title: 'Web3 & Blockchain',
      event: 'Induction MITM',
      image: event2Img,
      badge: '⛓️ Blockchain Expert'
    },
    {
      title: 'Blockchain basics',
      event: 'Avalanche Meetup',
      image: event3Img,
      badge: '👨‍💻 Code Mentor'
    },
    {
      title: 'Hands-on Agentic AI',
      event: 'ClubToCode',
      image: event4Img,
      badge: '🏆 ML speaker'
    },
    {
      title: 'Cloud Community Days',
      event: 'GDG Indore Event',
      image: event5Img,
      badge: '🔬 Networking & Communities'
    },
    {
      title: 'Project Pitch',
      event: 'Minor Project Presentation',
      image: event6Img,
      badge: '🐛 Debug Expert'
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Public Speaking & Community Engagement
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and insights through conferences, workshops, and community events
          </p>
        </motion.div>

        {/* 2-Column Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Main image container with gradient overlays - Hero Style */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-elevation-3 hover-lift">
                {/* Background gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 z-0" />
                
                {/* Image */}
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover object-center relative z-10 transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-20" />
                
                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold shadow-glow">
                      {event.badge}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/80">
                      {event.event}
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Animated gradient rings */}
              <div className="absolute -inset-4 -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse" />
              </div>
              
              {/* Secondary glow effect */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl scale-110 opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;