import Container from '../../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../../components/UI/Section'
import { Button } from '../../../components/UI/Button'

const AdminExperience = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-8">
          <SectionHeader
            title="Manage Experience"
            subtitle="Add, edit, and delete your work experience"
          />
          <Button>Add New Experience</Button>
        </div>
        <SectionContent>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Experience management interface will be displayed here. This will include CRUD operations for work experience.
            </p>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default AdminExperience
