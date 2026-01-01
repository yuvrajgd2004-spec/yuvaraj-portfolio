import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Target, TrendingUp, BarChart3, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Product-Oriented',
      description: 'Focused on building solutions that solve real business problems',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven',
      description: 'Leveraging analytics and KPIs to drive strategic decisions',
    },
    {
      icon: BarChart3,
      title: 'Analytics Expert',
      description: 'Expert in dashboards, reporting, and business intelligence',
    },
    {
      icon: Users,
      title: 'B2B Experience',
      description: 'Comfortable working in real-world business environments',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know my professional journey and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full card-hover">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a <strong>Product-oriented Business Analyst</strong> with a passion for
                  transforming complex data into actionable business insights. My experience spans
                  OEM manufacturing, analytics, and automation, where I've consistently delivered
                  value through data-driven decision making.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I specialize in <strong>KPI tracking, dashboarding, and reporting</strong>,
                  helping organizations understand their performance metrics and make informed
                  strategic decisions. My work has contributed to significant business improvements,
                  including revenue growth and operational efficiency.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm comfortable working in <strong>B2B environments</strong> and have hands-on
                  experience with real-world business challenges, from analyzing buyer requirements
                  to optimizing delivery performance and quality metrics.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

