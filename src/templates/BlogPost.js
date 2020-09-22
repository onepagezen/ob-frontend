import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialIcons from "../components/icons"
import CommentList from '../comments/comment-list';
import {
  Section,
  Container,
  Column,
  Columns,
  Box,
} from "bloomer"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <Section className="has-background-white">
      <Container>
      <h1 style={{ marginBottom: 0 }} >{data.wordpressPost.title}</h1>
        <p>
          Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
        </p>
      </Container>
      <Container>
        <Columns>
          <Column isSize='2/3'>
            {/* Prevents application from crashing when a featured image doesn't exist */}
            {data.wordpressPost.featured_media ? (
              <Img
                sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes}
                alt={data.wordpressPost.title}
                style={{ maxHeight: 450 }}
              />
            ) : null}
            <div
              style={{ marginTop: 20 }}
              dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
            />
          <CommentList postId={data.wordpressPost.wordpress_id} />
          </Column>
          <Column hasTextAlign='centered' isOffset='8'>
            <SocialIcons/>
            <Box>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </Box>
            <Box>
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </Box>
            <Box>
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
            </Box>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            sizes(maxWidth: 1200){
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      wordpress_id
    }
  }
`