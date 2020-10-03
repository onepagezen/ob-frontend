// Component for homepage about section
import React from "react"
import {
  Section,
  Container,
  Columns,
  Column,
  Button
} from "bloomer"
import { FcDocument, FcDownload } from "react-icons/fc"

const About = () => {
  return (
    <Section className="mailing-list has-white-text">
      <Container>     
        <Columns>
          <Column isSize='1/3'>  
              <img 
                alt="placeholder" 
                src="https://storage.googleapis.com/ob-frontend/make-this-theme-your-own.png"
              />
          </Column>
          <Column>
            <div>
              <h1>Make this theme your own!</h1>
              <p>Nutty Buddies is a squirrel-themed demo site for ob-frontend - a modern implementation of the WordPress frontend as a single-page application (SPA). This template, developed and packaged as a Gatsby starter, is a free and open-source solution for developers looking to modernize their WordPress sites.</p>
              {/* Icon buttons for Download and Documentation */}
              <Button className="github-link-buttons" href="https://github.com/onepagezen/ob-frontend/archive/master.zip">
                <FcDownload/>&nbsp;&nbsp;Download
              </Button>&nbsp;&nbsp;
              <Button className="github-link-buttons" href="https://github.com/onepagezen/ob-frontend">
                <FcDocument/>&nbsp;&nbsp;Documentation
              </Button>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default About