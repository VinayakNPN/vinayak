import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, FileText, Trophy, ExternalLink, Download } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Semi-Finalist',
      subtitle: 'International Hackathon "Paris BlockChain Week 2025"',
      description: 'Recognized among top participants in a prestigious international blockchain competition with participants from 50+ countries.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      date: '2025',
      type: 'Competition',
      badge: 'International'
    },
    {
      title: '1st Prize Winner',
      subtitle: 'Technical Presentation Competition',
      description: 'Won first prize for comprehensive presentation on Agentic AI theme, demonstrating exceptional research and presentation skills.',
      icon: Award,
      color: 'from-blue-500 to-purple-600',
      date: '2024',
      type: 'Academic Excellence',
      badge: 'Winner'
    },
    {
      title: 'Microsoft GenAI Fundamentals Certified',
      subtitle: 'Microsoft Certification',
      description: 'Successfully completed Microsoft\'s comprehensive certification program on Generative AI fundamentals and applications.',
      icon: FileText,
      color: 'from-green-500 to-teal-600',
      date: '2024',
      type: 'Professional Certification',
      badge: 'Certified',
      hasDownload: true
    },
    {
      title: 'TCS Soft Skills Certified',
      subtitle: 'Tata Consultancy Services',
      description: 'Completed professional soft skills development program focusing on communication, leadership, and collaboration skills.',
      icon: Medal,
      color: 'from-pink-500 to-rose-600',
      date: '2024',
      type: 'Professional Development',
      badge: 'Certified',
      hasDownload: true
    },
    {
      title: 'Community Leadership Recognition',
      subtitle: 'AlertCode 3.0 & AppliedSchool',
      description: 'Recognized for outstanding contribution to developer community through organizing events, workshops, and mentoring initiatives.',
      icon: Award,
      color: 'from-indigo-500 to-blue-600',
      date: '2024',
      type: 'Community Service',
      badge: 'Leader'
    },
    {
      title: 'Academic Excellence',
      subtitle: 'RGPV University - B.Tech CSE',
      description: 'Maintaining consistent academic performance with 6.99/10 CGPA while actively participating in extracurricular activities.',
      icon: Trophy,
      color: 'from-purple-500 to-pink-600',
      date: 'Ongoing',
      type: 'Academic Achievement',
      badge: 'Excellence'
    }
  ];

  const stats = [
    { label: 'Certifications Earned', value: '4+', icon: FileText },
    { label: 'Competitions Won', value: '2', icon: Trophy },
    { label: 'Community Events Led', value: '15+', icon: Award },
    { label: 'Years of Leadership', value: '2+', icon: Medal }
  ];

  return (
    <section id="achievements" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Recognition for technical excellence, leadership, and community contribution
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-6 text-center hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} mr-4`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {achievement.badge}
                      </span>
                      <div className="text-sm text-muted-foreground mt-1">
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Type badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {achievement.type}
                  </span>
                  
                  {achievement.hasDownload && (
                    <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors focus-visible-ring rounded-md p-1">
                      <Download className="w-3 h-3" />
                      Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Continuing the Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              These achievements represent milestones in my ongoing journey of learning, 
              innovation, and community building. I continue to pursue excellence in 
              technology, leadership, and making meaningful contributions to the developer ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Advanced AI/ML Certifications',
                'International Speaking Opportunities',
                'Open Source Contributions',
                'Research Publications',
                'Industry Collaborations',
                'Global Community Impact'
              ].map((goal, index) => (
                <motion.span
                  key={goal}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {goal}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;