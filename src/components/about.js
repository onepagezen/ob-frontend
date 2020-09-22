// Component for homepage about section
import React from "react"
import {
  Section,
  Container,
  Columns,
  Column,
} from "bloomer"

const About = () => {
  return (
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
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default About