import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { GraduationCap, Award, Languages } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Business Analytics',
      institution: 'Presidency University',
      period: '2022–2025',
      gpa: '7.9 / 10',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const certifications = [
    {
      name: 'Supply Chain Management & Analytics',
      issuer: 'Unilever',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Business Analytics',
      issuer: 'EdGlobe',
      icon: Award,
      gradient: 'from-teal-500 to-green-500',
    },
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Kannada', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
  ]

  return (
    <section id="education" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
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
              Education & Credentials
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 bg-gradient-to-br ${edu.gradient} rounded-lg flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                              {edu.degree}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                              {edu.institution}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <span>{edu.period}</span>
                              <span>•</span>
                              <span className="font-semibold">GPA: {edu.gpa}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 bg-gradient-to-br ${cert.gradient} rounded-lg flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Languages className="w-6 h-6" />
              Languages
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {lang.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {lang.level}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

