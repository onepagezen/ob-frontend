import React from "react"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Icon,
  Column,
  Columns,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <Section className="has-background-white">
      <Container>
        <Columns>
          <Column>
            {/* Page title */}
            <Title isSpaced>About</Title>
            <Subtitle>This is the second page.</Subtitle>
            {/* Back to homepage button */}
            <Link to="/">
              <Button isColor="primary" className="is-rounded" id="is-spaced">
                <Icon className="fa fa-arrow-left fa-sm" />
                <span>Go back to the homepage</span>
              </Button>
            </Link>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default About
