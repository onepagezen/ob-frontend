import React, { Component } from "react"
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Button,
  Columns,
  Column,
  Icon,
} from "bloomer"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="medium" textalign="left">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize="1/2">
                {/* Headline */}
                <Title>{this.props.description}</Title>
                {/* Call to action button */}
                <Button
                  isColor="white"
                  isOutlined
                  href="https://github.com/zlutfi/gatsby-starter-bloomer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="is-rounded"
                  id="btn-spaced"
                >
                  {/* Call to action button icon */}
                  <span>Download Now</span>
                  <Icon className="fab fa-github fa-sm" />
                </Button>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}
