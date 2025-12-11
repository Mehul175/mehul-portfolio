'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'WP Event Manager',
      position: 'React Native Developer',
      duration: 'Mar 2024 - Sep 2025',
      location: 'Surat, Gujarat',
      description: 'Working as a React-Native Developer, I contribute to building and enhancing mobile app features that complement the WP Event Manager platform, focusing on efficient and user-friendly event management solutions.',
      achievements: [
        'Developed Event Manager App with QR code scanning and real-time tracking',
        'Implemented offline support and multi-language options',
        'Built Hire Tech Talent app for connecting employers with tech professionals',
        'Created FoodMato Restaurant Partner app for restaurant management'
      ]
    },
    {
      company: 'Wordex InfoTech',
      position: 'React Native Developer',
      duration: 'May 2023 - Mar 2024',
      location: 'Surat, Gujarat',
      description: 'Developed React Native mobile applications for both iOS and Android platforms. As a React Native Developer at Wordex Infotech, I developed and maintained high-quality mobile applications to meet client needs and project requirements.',
      achievements: [
        'Built XtendedSpace property rental app with Razorpay payment integration',
        'Developed Leo Chats social app with video calling and friend matching features',
        'Created scalable mobile applications for diverse client requirements',
        'Implemented payment systems and real-time features'
      ]
    },
    {
      company: 'SRKAY Consulting Group',
      position: 'React Native Developer',
      duration: 'Jan 2022 - May 2023',
      location: 'Surat, Gujarat',
      description: 'As a React Native Developer at SRKAY Consulting Group, I was responsible for designing, developing, and maintaining mobile applications to support the company\'s strategic business and technology initiatives.',
      achievements: [
        'Developed HCIS (Human Capital Information System) for HR management',
        'Built employee portal with announcements, surveys, and feedback forms',
        'Implemented secure mobile applications for enterprise clients',
        'Collaborated with cross-functional teams to deliver scalable solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in mobile app development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="flex items-start space-x-6 pb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;