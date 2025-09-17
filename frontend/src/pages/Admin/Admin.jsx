import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants'
import Container from '../../components/Layout/Container'
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section'
import { Button } from '../../components/UI/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/UI/Card'

const Admin = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Admin Dashboard"
          subtitle="Manage your portfolio content"
        />
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manage your projects, add new ones, and update existing ones.
                </p>
                <Link to={ROUTES.ADMIN_PROJECTS}>
                  <Button>Manage Projects</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manage your work experience and professional history.
                </p>
                <Link to={ROUTES.ADMIN_EXPERIENCE}>
                  <Button>Manage Experience</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}

export default Admin
