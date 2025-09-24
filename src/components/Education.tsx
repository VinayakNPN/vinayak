import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'RGPV University',
      location: 'Bhopal, MP',
      period: 'Expected July 2026',
      gpa: '6.99/10.0',
      highlights: [
        'Core CS fundamentals & advanced topics',
        'AI/ML specialization courses',
        'Software engineering practices',
        'System design & architecture'
      ]
    },
    {
      degree: '12th Standard (P.C.M.)',
      field: 'Physics, Chemistry, Mathematics',
      institution: 'Pioneer Public H.S. School',
      location: 'Anjad, MP',
      period: 'July 2022',
      gpa: '70.9%',
      highlights: [
        'Strong foundation in mathematics',
        'Physics & analytical thinking',
        'Problem-solving skills development'
      ]
    },
    {
      degree: '10th Standard',
      field: 'Secondary Education',
      institution: 'Pioneer Public H.S. School',
      location: 'Anjad, MP', 
      period: 'July 2020',
      gpa: '82.4%',
      highlights: [
        'Academic excellence',
        'Leadership development',
        'Extracurricular participation'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          {educationData.map((edu, index) => (
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium mb-2">
                        {edu.field}
                      </p>
                      <p className="text-primary font-semibold mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 ml-4" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium">Grade: {edu.gpa}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;