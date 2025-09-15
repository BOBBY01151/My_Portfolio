import Container from '../../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../../components/UI/Section'
import Button from '../../../components/UI/Button'

const AdminProjects = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-8">
          <SectionHeader
            title="Manage Projects"
            subtitle="Add, edit, and delete your projects"
          />
          <Button>Add New Project</Button>
        </div>
        <SectionContent>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Project management interface will be displayed here. This will include CRUD operations for projects.
            </p>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default AdminProjects
