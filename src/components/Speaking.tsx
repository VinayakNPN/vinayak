import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// Import all speaking event images
import event1Img from '../assets/speaking/event1.jpg';
import event2Img from '../assets/speaking/event2.jpg';
import event3Img from '../assets/speaking/event3.jpg';
import event4Img from '../assets/speaking/event4.jpg';
import event5Img from '../assets/speaking/event5.jpg';
import event6Img from '../assets/speaking/event6.jpg';
import event7Img from '../assets/speaking/event7.jpg';
import event8Img from '../assets/speaking/event8.jpg';
import event9Img from '../assets/speaking/event9.jpg';
import event10Img from '../assets/speaking/event10.jpg';

const Speaking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const events = [
    {
      title: 'Tech guide in Web3',
      event: 'MIT Induction 2025',
      image: event1Img,
    },
    {
      title: 'Web3 & Blockchain Session',
      event: 'MIT Induction 2025',
      image: event2Img,
    },
    {
      title: 'Blockchain Fundamentals',
      event: 'BlockChain Orbit Web3 Meetup',
      image: event3Img,
    },
    {
      title: 'Machine Learning Workshop',
      event: 'Unlocking the Power of AI @CTC',
      image: event4Img,
    },
    {
      title: 'Cloud Community Days 2025',
      event: 'GDG Indore',
      image: event5Img,
    },
    {
      title: 'Project Presentation',
      event: 'MIT Minor Project',
      image: event6Img,
    },
    {
      title: 'Tech Innovation Summit',
      event: 'Web3 Dev meet',
      image: event7Img,
    },
    {
      title: 'Developer Meetup',
      event: 'AlertCode',
      image: event8Img,
    },
    {
      title: 'Talk session',
      event: 'MIT',
      image: event9Img,
    },
    {
      title: 'Google Gemini WorkShop',
      event: 'GDG Indore',
      image: event10Img,
    }
  ];

  // Auto-slide functionality - advance by 2 slides
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 2) % events.length);
      }, 5000); // Slightly longer interval for pairs
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, events.length]);

  // Navigation functions - advance by 2 slides at a time
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="speaking" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Single Line Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Speaking & Events
          </h2>
        </motion.div>

        {/* Modern Glass Slider - Two Vertical Images */}
        <div className="relative">
          <div
            className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
                  {/* Left Vertical Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={events[currentSlide].image}
                      alt={events[currentSlide].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="glass rounded-xl p-4 md:p-5 backdrop-blur-xl bg-white/5 border border-white/10">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {events[currentSlide].title}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base">
                          {events[currentSlide].event}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Vertical Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={events[(currentSlide + 1) % events.length].image}
                      alt={events[(currentSlide + 1) % events.length].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <div className="glass rounded-xl p-4 md:p-5 backdrop-blur-xl bg-white/5 border border-white/10">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {events[(currentSlide + 1) % events.length].title}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base">
                          {events[(currentSlide + 1) % events.length].event}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover-lift"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover-lift"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Auto-play Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 md:top-6 right-4 md:right-6 p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Dot Indicators - Show pairs */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(events.length / 2) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * 2)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 2) === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to pair ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;