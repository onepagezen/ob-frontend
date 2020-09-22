import React from "react"
import PostsSearch from '../search/PostsSearch'
import {
  Section,
  Container,
  Title,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* Adds search functionality to Gatsby.  Dependent on configuration files in
src/apollo and src/seach - as well as the Apollo exports in gatsby-browser.js and 
gatsby-ssr.js. */
const Search = () => (
<Layout>
    <Section>
      <Container>
        <SEO title="Posts" keywords={[`gatsby`, `application`, `react`]} />
          <Title isSpaced>Search</Title>
          <PostsSearch />     
      </Container>
    </Section>
  </Layout>
)

export default Search
