import React from "react"

import { Title, Section, Container } from "bloomer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container>
        <Title>NOT FOUND</Title>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
