import Container from '../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section'

const Contact = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />
        <SectionContent>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Contact form will be displayed here. This page will have a contact form for reaching out.
            </p>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default Contact
