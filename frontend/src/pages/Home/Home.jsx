import { Link } from 'react-router-dom'
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react'
import { ROUTES } from '../../lib/constants'
import Button from '../../components/UI/Button'
import Container from '../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section'

const HomeOriginal = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Your Name
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A passionate developer creating amazing digital experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.PROJECTS}>
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Stats */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                50+ Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Completed projects across various technologies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                5+ Years
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional experience in software development
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects Preview */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <SectionHeader
            title="Featured Projects"
            subtitle="Some of my recent work that I'm proud of"
          />
          <SectionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for featured projects */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Project Title
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Brief description of the project and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded">
                    Node.js
                  </span>
                </div>
                <Link to={ROUTES.PROJECTS}>
                  <Button variant="outline" size="sm">
                    View All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </SectionContent>
        </Container>
      </Section>
    </>
  )
}

export default HomeOriginal
