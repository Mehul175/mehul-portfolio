'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Using original web icons instead of Lucide React icons

const Skills = () => {
  const skills = [
    { 
      name: 'React Native', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      description: 'Cross-platform mobile development',
      bgColor: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      description: 'Modern ES6+ development',
      bgColor: 'bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500'
    },
    { 
      name: 'Redux Toolkit', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      description: 'State management solution',
      bgColor: 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500'
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      description: 'Backend as a Service',
      bgColor: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500'
    },
    { 
      name: 'APIs', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      description: 'RESTful & GraphQL APIs',
      bgColor: 'bg-gradient-to-br from-green-500 via-green-600 to-teal-500'
    },
    { 
      name: 'Payment Integration', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg',
      icon2: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/razorpay/razorpay-original.svg',
      description: 'Secure payment processing',
      bgColor: 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500'
    },
    { 
      name: 'Push Notifications', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      description: 'Real-time messaging',
      bgColor: 'bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500'
    },
    { 
      name: 'CI/CD Automation', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      description: 'Continuous integration & deployment',
      bgColor: 'bg-gradient-to-br from-gray-600 via-gray-700 to-slate-600'
    },
    { 
      name: 'XCode', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
      description: 'iOS development environment',
      bgColor: 'bg-gradient-to-br from-gray-500 via-gray-600 to-slate-500'
    },
    { 
      name: 'Android Studio', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
      description: 'Android development IDE',
      bgColor: 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-600'
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing mobile experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative card h-64 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon Container */}
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200 dark:border-gray-300">
                    {skill.name === 'Payment Integration' ? (
                      <div className="flex items-center justify-center">
                        <img 
                          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.svg"
                          alt="Razorpay"
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="text-2xl font-bold text-blue-600">R</div>';
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Try alternative icon sources
                          const target = e.currentTarget;
                          const skillName = skill.name.toLowerCase();
                          
                          if (skillName.includes('push')) {
                            target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg';
                          } else if (skillName.includes('ci') || skillName.includes('cd')) {
                            target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg';
                          } else if (skillName.includes('xcode')) {
                            target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg';
                          } else if (skillName.includes('android')) {
                            target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg';
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    )}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white dark:bg-gray-100 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-center leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center px-2">
                    {skill.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;