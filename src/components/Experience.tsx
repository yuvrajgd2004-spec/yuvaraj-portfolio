import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Briefcase, Calendar, TrendingUp, BarChart3 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Brand Strategist',
      company: 'OM Brass Pvt Ltd',
      period: '2025',
      icon: Briefcase,
      achievements: [
        'Supported OEM expansion initiatives',
        'Analyzed buyer requirements, quality metrics, and delivery performance',
        'Contributed to ~11% revenue increase through strategic insights',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Business Analytics Intern',
      company: 'EdiGlobe Pvt Ltd',
      period: '2024',
      icon: BarChart3,
      achievements: [
        'Built dashboards and reports for data-driven decision making',
        'Used Python (Pandas, NumPy) for data analysis and automation',
        'Improved reporting efficiency and streamlined business processes',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my career journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative mb-12 md:mb-16 ${
                    isEven ? 'md:pr-[52%]' : 'md:pl-[52%] md:text-right'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10`}
                  />

                  <div className="ml-16 md:ml-0">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div
                          className={`flex items-start gap-4 ${
                            !isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <div
                            className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-lg flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className={`flex items-center gap-2 mb-2 flex-wrap ${!isEven ? 'md:justify-end' : ''}`}>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {exp.title}
                              </h3>
                              <span className="text-gray-500">•</span>
                              <span className="text-blue-600 dark:text-blue-400 font-medium">
                                {exp.company}
                              </span>
                            </div>
                            <div className={`flex items-center gap-2 text-sm text-gray-500 mb-4 ${!isEven ? 'md:justify-end' : ''}`}>
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, aIndex) => (
                                <li
                                  key={aIndex}
                                  className={`text-gray-600 dark:text-gray-300 flex items-start gap-2 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                  <TrendingUp className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

