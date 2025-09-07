'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Event Manager App',
      description: 'A React-Native mobile app that streamlines event management with easy attendee check-ins, QR code scanning, real-time tracking, offline support, customisable themes, and multi-language options for a seamless user experience.',
      tech: ['React Native', 'QR Code Scanning', 'Real-time Tracking', 'Offline Support'],
      playStore: 'https://play.google.com/store/apps/details?id=com.wpeventmanager&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/wp-event-manager/id1554422731',
      emoji: '📅'
    },
    {
      title: 'Hire Tech Talent',
      description: 'A mobile application designed to simplify the process of hiring skilled professionals by connecting employers with suitable tech talent quickly and efficiently. The app offers user-friendly job posting, candidate search, and communication features.',
      tech: ['React Native', 'Job Management', 'Candidate Search', 'Communication'],
      playStore: 'https://play.google.com/store/apps/details?id=com.hiretechtalent&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/hire-tech-talent/id6450185479',
      emoji: '💼'
    },
    {
      title: 'FoodMato Restaurant Partner',
      description: 'A comprehensive restaurant management app designed for cafes, bars, gourmet restaurants, and food trucks. It simplifies online order management, delivery tracking, and reservation handling with features like coupon management and order printing.',
      tech: ['React Native', 'Order Management', 'Delivery Tracking', 'Reservation System'],
      playStore: 'https://play.google.com/store/apps/details?id=com.foodmatopartner&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/foodmato-restaurant-partner/id6739695298',
      emoji: '🍽️'
    },
    {
      title: 'XtendedSpace',
      description: 'A mobile application where users can search for property and rent property for business as well as for housing purposes. Users can list their property for rent. Razorpay payment is integrated for billing and payment purposes.',
      tech: ['React Native', 'Property Management', 'Razorpay Integration', 'Search & Filter'],
      playStore: 'https://play.google.com/store/apps/details?id=com.xtendedspaceapp&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/xtended-space/id1671530684',
      emoji: '🏠'
    },
    {
      title: 'HCIS (Human Capital Information System)',
      description: 'A mobile Application that is part of a HR-Management System, where all Employees can get new announcements, Important messages, surveys, feedback form from the management their respective team leads and also can fill that form.',
      tech: ['React Native', 'HR Management', 'Survey System', 'Employee Portal'],
      playStore: 'https://play.google.com/store/apps/details?id=com.hcisapp.prod&pcampaignid=web_share',
      appStore: 'https://apps.apple.com/in/app/pure-hcis/id1665509381',
      emoji: '👥'
    },
    {
      title: 'Newsbolt',
      description: 'A mobile application where users can see news in forms of shorts. Channel feature is also available where users can create channel and upload shorts. Users can see news, share news, add comment, like news.',
      tech: ['React Native', 'News Feed', 'Channel Management', 'Social Features'],
      playStore: '#',
      appStore: '#',
      emoji: '📰'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent mobile applications and development work
          </p>
        </motion.div>

        <div className="grid-responsive">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-6xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {project.emoji}
                  </motion.div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.playStore}
                    className="btn btn-primary btn-sm flex-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img 
                      src="/play_store.svg" 
                      alt="Play Store" 
                      className="w-4 h-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    Play Store
                  </motion.a>
                  
                  <motion.a
                    href={project.appStore}
                    className="btn btn-primary btn-sm flex-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img 
                      src="/app_store.svg" 
                      alt="App Store" 
                      className="w-4 h-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    App Store
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;