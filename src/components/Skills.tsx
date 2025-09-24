import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, GitBranch, Brain, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'C/C++', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-600' },
        { name: 'SQL', level: 75, color: 'from-purple-500 to-purple-600' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      skills: [
        { name: 'TensorFlow', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Keras', level: 80, color: 'from-red-500 to-red-600' },
        { name: 'React', level: 75, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Streamlit', level: 85, color: 'from-pink-500 to-pink-600' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-500 to-gray-600' },
        { name: 'Linux', level: 80, color: 'from-teal-500 to-teal-600' },
        { name: 'Google Cloud Platform', level: 70, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Tableau', level: 75, color: 'from-rose-500 to-rose-600' }
      ]
    },
    {
      title: 'AI/ML Specialization',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 90, color: 'from-violet-500 to-violet-600' },
        { name: 'Deep Learning', level: 85, color: 'from-emerald-500 to-emerald-600' },
        { name: 'Computer Vision', level: 80, color: 'from-amber-500 to-amber-600' },
        { name: 'Neural Networks', level: 85, color: 'from-lime-500 to-lime-600' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Microsoft GenAI Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      icon: Brain
    },
    {
      title: 'TCS Soft Skills Certified',
      issuer: 'Tata Consultancy Services',
      date: '2024',
      icon: Globe
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass rounded-xl p-6 hover-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'SDLC', 'Agile Methodology', 'OOP Concepts', 'Operating Systems',
                'Database Management', 'Computer Networks', 'Data Structures',
                'Algorithm Design', 'System Design', 'Problem Solving',
                'Critical Thinking', 'Team Leadership', 'Public Speaking'
              ].map((competency, index) => (
                <motion.span
                  key={competency}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;