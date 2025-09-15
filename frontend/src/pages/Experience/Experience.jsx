import Container from '../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section'

const Experience = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and achievements"
        />
        <SectionContent>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Experience timeline will be displayed here. This page will show work experience from the API.
            </p>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default Experience
