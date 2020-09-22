import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import {
  Section,
  Container,
  Columns,
  Column,
  Button,
  Box,
  Title
} from "bloomer"
import MailingList from "../mailchimp/mailing-list"
import { FcGallery } from "react-icons/fc"
import Posts from "../search/PostsList"

const IndexPage = ({ data }) => {
  return (
      <Layout>
        <SEO title="Home" />
        <Section className="mailing-list has-white-text">
          <Container>
            <Columns>
              <Column isSize='1/3'>  
                  <img alt="placeholder" src="https://via.placeholder.com/350x225"/>
              </Column>
              <Column>
                <div>
                  <h1>Your null awaits!</h1>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                </div>
                <MailingList/>
              </Column>
            </Columns>
          </Container>
        </Section>
        <Section>
          <Container>
          <Title isSpaced>Popular Guides</Title>
            <Columns>
              {/* Card 1 */}
              <Column isSize='1/3'>  
                <Box className="content-centered">
                  <FcGallery size={80}/>
                    <h2>null for beginners</h2>
                    <p>This is a paragraph</p>
                  <Button isColor="primary">Get started</Button>
                </Box>
              </Column>
              {/* Card 2 */}
              <Column isSize='1/3'>
                <Box className="content-centered">
                  <FcGallery size={80}/>
                    <h2>null care guides</h2>
                    <p>This is a paragraph</p>
                  <Button isColor="primary">Get started</Button>
                </Box>
              </Column>
              {/* Card 3 */}
              <Column isSize='1/3'>
                <Box className="content-centered">
                  <FcGallery size={80}/>
                    <h2>null essential tools</h2>
                    <p>This is a paragraph</p>
                  <Button isColor="primary">Get started</Button>
                </Box>
              </Column>
            </Columns>
          </Container>
        </Section>
        <Section className='homepage-posts'>
          <Container>
            <Title isSpaced>Featured Posts</Title>
            <Posts searchQuery={''} tag={'featured'}/>
          </Container>
        </Section>
        <About/>
      </Layout>
  )
}

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
}
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
