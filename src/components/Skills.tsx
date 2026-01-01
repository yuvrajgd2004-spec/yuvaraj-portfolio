import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BarChart3,   
  Code,
  Users
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Business & Product Skills',
      icon: BarChart3,
      skills: [
        'Product Analysis',
        'Business Analytics',
        'KPI Tracking',
        'Dashboarding & Reporting',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Technical Tools',
      icon: Code,
      skills: ['Excel', 'Power BI', 'Python'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Problem Solving',
        'Leadership',
        'Teamwork',
        'Effective Communication',
        'Critical Thinking',
      ],
      gradient: 'from-teal-500 to-green-500',
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-gray-950">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for product analysis and business strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full card-hover border-2 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 bg-gradient-to-br ${category.gradient} rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${category.gradient} text-white shadow-md hover:shadow-lg transition-shadow`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

