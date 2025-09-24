import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Users, Trophy, Presentation } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'City Lead',
      organization: 'AlertCode 3.0',
      location: 'Indore, MP',
      period: '2024 - Present',
      type: 'Leadership Role',
      description: 'Leading Web3 & AI community initiatives across Ujjain and Indore regions.',
      responsibilities: [
        'Organized and led Web3 & AI events and meetups in multiple cities',
        'Coordinated technical workshops and knowledge sharing sessions',
        'Built and managed developer communities across central India',
        'Facilitated networking between industry professionals and students'
      ],
      icon: Users,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Development Lead',
      organization: 'Coding Club MIT',
      location: 'Ujjain, MP',
      period: '2023 - Present',
      type: 'Technical Leadership',
      description: 'Leading technical initiatives and educational programs for computer science students.',
      responsibilities: [
        'Led comprehensive speaker sessions on CS fundamentals',
        'Conducted hands-on workshops on Agentic-AI and modern technologies',
        'Mentored junior students in programming and software development',
        'Organized coding competitions and technical events'
      ],
      icon: Briefcase,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Community Moderator',
      organization: 'AppliedSchool',
      location: 'Indore, MP',
      period: '2023 - Present',
      type: 'Community Management',
      description: 'Managing tech community events and educational workshops in the Debugshala initiative.',
      responsibilities: [
        'Hosted regular meetups in Debugshala program in Indore city',
        'Conducted specialized workshops on Streamlit, Ollama, and AI tools',
        'Facilitated collaborative learning environments for developers',
        'Coordinated with industry experts for guest sessions'
      ],
      icon: Presentation,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const achievements = [
    {
      title: 'Semi-Finalist',
      event: 'International Hackathon "Paris BlockChain Week 2025"',
      description: 'Recognized among top participants in prestigious international blockchain competition',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: '1st Prize Winner',
      event: 'Technical Presentation Competition',
      description: 'Won first prize for presentation on Agentic AI theme, demonstrating research excellence',
      icon: Trophy,
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline marker */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background shadow-elevation-2" />

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <motion.div
                  className="glass rounded-2xl p-8 hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} mr-3`}>
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Notable Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Notable Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-primary font-semibold mb-3">
                      {achievement.event}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Leadership Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I believe in fostering inclusive tech communities where knowledge sharing drives innovation. 
              Through organizing workshops, mentoring students, and building connections between academia 
              and industry, I work to create environments where everyone can grow and contribute to 
              technological advancement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;