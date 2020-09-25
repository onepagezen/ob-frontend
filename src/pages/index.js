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
import { FcReading, FcDecision, FcGlobe} from "react-icons/fc"
import Posts from "../search/PostsList"

const IndexPage = ({ data }) => {
  return (
      <Layout>
        <SEO title="Home" />
        <Section className="mailing-list has-white-text">
          <Container>
            <Columns>
              <Column isSize='1/3'>  
                  <img className="nutty-buddy" alt="placeholder" src="https://storage.googleapis.com/ob-frontend/squirrel-light-frame.png"/>
              </Column>
              <Column>
                <div className="nutty-buddies-intro">
                  <h1>Welcome to Nutty Buddies!</h1>
                  <p>Nutty Buddies is a squirrel-themed demo site for ob-frontend - a modern implementation of the WordPress frontend as a single-page application (SPA). This template, developed and packaged as a Gatsby starter, is a free and open-source solution for developers looking to modernize their WordPress sites.</p>
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
                  <FcReading size={80}/>
                    <h2>Squirrel guides</h2>
                    <p>Learn all about what it takes to care for domesticated squirrels!</p>
                  <Button isColor="primary">Get started</Button>
                </Box>
              </Column>
              {/* Card 2 */}
              <Column isSize='1/3'>
                <Box className="content-centered">
                  <FcDecision size={80}/>
                    <h2>Squirrel FAQ</h2>
                    <p>Your squirrel-releated questions answered by professionals!</p>
                  <Button isColor="primary">Get started</Button>
                </Box>
              </Column>
              {/* Card 3 */}
              <Column isSize='1/3'>
                <Box className="content-centered">
                  <FcGlobe size={80}/>
                    <h2>Squirrel locator</h2>
                    <p>Experience the migratory patterns of squirrels in real time!</p>
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
