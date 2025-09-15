import Container from '../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section'

const Projects = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="My Projects"
          subtitle="A collection of projects I've worked on"
        />
        <SectionContent>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Projects will be displayed here. This page will show finished projects from the API.
            </p>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default Projects
