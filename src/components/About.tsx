import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Users, Target } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const About = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS'],
      icon: Code,
      color: 'from-blue-500 to-purple-600'
    },
    {
      category: 'Frameworks',
      items: ['TensorFlow', 'Keras', 'React', 'Streamlit', 'NumPy'],
      icon: Brain,
      color: 'from-green-500 to-teal-600'
    },
    {
      category: 'Tools',
      items: ['Git/Github', 'Linux', 'GCP', 'Tableau', 'Vercel'],
      icon: Target,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <img
                  src={avatarImg}
                  alt="Vinayak Chouhan"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-elevation-2 mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Vinayak Chouhan</h3>
                  <p className="text-muted-foreground">B.Tech Computer Science Student</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A self-motivated final-year Computer Science student passionate about AI/ML 
                and software development. I combine technical expertise with strong presentation 
                skills to deliver impactful solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science & Engineering at RGPV University 
                with hands-on experience in machine learning, web development, and system programming. 
                I actively contribute to the tech community through workshops, presentations, and 
                open-source projects.
              </p>
              
              <div className="flex items-center mt-6 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Community Leader</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Problem Solver</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="glass rounded-xl p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;