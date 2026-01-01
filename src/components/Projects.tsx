import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { 
  Sparkles, 
  Zap, 
  Database, 
  Globe, 
  Code, 
  Layers,
  TrendingUp,
  Users,
  FileText
} from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Narrator's BI",
      tagline: 'AI-assisted analytics product',
      icon: Sparkles,
      description:
        'An intelligent analytics platform that converts raw Excel/CSV data into plain-English business insights, dramatically reducing manual reporting effort.',
      achievements: [
        'Reduced manual reporting effort by ~60–70%',
        'Accelerated decision-making through automated insights',
        'Transformed complex data into actionable business intelligence',
      ],
      techStack: [
        'Python (Pandas, NumPy)',
        'Data Visualization',
        'Dashboarding',
        'Business Intelligence',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
    },
    {
      title: 'GreenVolt',
      tagline: 'Battery waste collection & EPR compliance platform',
      icon: Zap,
      description:
        'A full-stack web application that replaces manual workflows with a centralized digital platform for battery waste collection and EPR compliance management.',
      achievements: [
        'Replaced manual workflows (calls, spreadsheets, paperwork)',
        'Centralized platform for clients, agents, and admins',
        'Real-time status updates via WebSockets',
        'Production-ready with clean architecture and type safety',
      ],
      features: [
        {
          role: 'Clients',
          description: 'Raise pickup requests & track status',
          icon: Users,
        },
        {
          role: 'Collection Agents',
          description: 'Manage assigned pickups & update progress',
          icon: FileText,
        },
        {
          role: 'Admins',
          description: 'Manage users, monitor operations, maintain EPR documentation & analytics',
          icon: TrendingUp,
        },
      ],
      techStack: [
        'React + TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'React Hook Form',
        'Zod',
        'TanStack React Query',
        'Node.js + Express',
        'PostgreSQL',
        'Drizzle ORM',
        'Passport.js',
        'WebSockets',
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-gray-950">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world solutions built with modern technologies
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  className={`card-hover border-2 overflow-hidden bg-gradient-to-br ${project.bgGradient}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {project.tagline}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, aIndex) => (
                          <li
                            key={aIndex}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-green-500 mt-1.5">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features (for GreenVolt) */}
                    {project.features && (
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                          <Layers className="w-5 h-5 text-blue-500" />
                          Core Roles
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {project.features.map((feature, fIndex) => {
                            const FeatureIcon = feature.icon
                            return (
                              <div
                                key={fIndex}
                                className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <FeatureIcon className="w-4 h-4 text-blue-600" />
                                  <span className="font-semibold text-sm">
                                    {feature.role}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature.description}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-500" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white shadow-md`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Projects

