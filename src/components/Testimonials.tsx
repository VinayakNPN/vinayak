import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Import testimonial avatars
import avatar1 from '../assets/testimonials/avatar1.jpg';
import avatar2 from '../assets/testimonials/avatar2.jpg';
import avatar3 from '../assets/testimonials/avatar3.jpg';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sandeep Chouhan',
      role: 'DevOps Technical Architect',
      organization: 'Yash Technologies, Germany',
      avatar: avatar2,
      rating: 5,
      testimonial: 'I have had the distinct pleasure of observing Vinayak’s progress, and I am hugely impressed by his unwavering dedication and genuine passion for the field. What truly sets him apart is his initiative-taking approach; he does not just meet expectations; he consistently surpasses them. He independently sought out and participated in hackathons like events, demonstrating a real drive to apply his knowledge in practical settings,His eagerness to learn is not just a passive trait. He actively seeks feedback and guidance, consistently engaging in thoughtful discussions about his work. I have personally witnessed him take constructive criticism and translate it into tangible improvements in his projects and understanding. Furthermore, his sincerity shines through in every interaction, making him a collaborative and supportive team member. His drive, coupled with his willingness to learn and grow, makes him an exceptional asset to any engineering team. I wholeheartedly recommend him for any opportunity that will allow him to further develop his skills and contribute meaningfully.',
      project: 'Technical Mentorship & System Design'
    },
    {
      name: 'Anup Chouhan',
      role: 'Software Developer',
      organization: 'Data Axle, Pune',
      avatar: avatar3,
      rating: 5,
      testimonial: 'I have had the pleasure of knowing Vinayak Chouhan, and I am truly impressed by his enthusiasm, dedication, and technical expertise. Despite being a fresher, Vinayak demonstrates an exceptional grasp in Python, GenAI, Block Chain AI/ML and C/C++ problem-solving. His ability to adapt to new frameworks and cloud technologies makes him a standout professional among all. His proactive approach to solving codes, development, and problem-solving highlights his ability to take initiative and drive results. Vinayak is not just a skilled developer but also a great team player and a quick learner who continuously strives to upskill himself. I have no doubt that he will be a valuable asset to any organization he joins. I highly recommend connecting with him for opportunities in upcoming projects. Wishing you great success, Vinayak! 🚀',
      project: 'Software Development & Community Contribution'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Testimonials from mentors, colleagues, and industry professionals
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Avatar and Info */}
                  <div className="text-center md:text-left">
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto md:mx-0 shadow-elevation-2 border-4 border-primary/20"
                      />
                      <div className="absolute -top-2 -right-2 p-2 bg-primary rounded-full">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {testimonials[currentTestimonial].organization}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                      {testimonials[currentTestimonial].project}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <blockquote className="text-muted-foreground text-lg leading-relaxed italic mb-6">
                      "{testimonials[currentTestimonial].testimonial}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors focus-visible-ring"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors focus-visible-ring"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible-ring rounded-md px-2 py-1"
            >
              {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Professional References</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Recommendation Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;