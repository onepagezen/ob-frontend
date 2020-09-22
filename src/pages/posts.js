import React, { Component } from 'react';
import Posts from '../search/PostsList'
import {
  Section,
  Container,
  Title,
} from "bloomer"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Pass searchQuery prop as empty string when querying for all posts
class AllPosts extends Component {
  state = {
    searchQuery: '',
  }

  render() {
    return (
      <Layout>
        <Section>
          <Container>
            <SEO title="Posts" keywords={[`gatsby`, `application`, `react`]} />
              <Title isSpaced>Posts</Title>
              <Posts searchQuery={''} />  
          </Container>
        </Section>
      </Layout>
      )
    };
}

export default AllPosts