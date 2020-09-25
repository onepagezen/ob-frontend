import React from "react"
import { Footer, Container, Content, Icon, Columns, Column } from "bloomer"
import { FcApproval } from "react-icons/fc"
import SocialIcons from "../components/icons"
import MailingList from "../mailchimp/mailing-list"

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        <Columns className="is-reversed-touch is-reversed-mobile">
          <Column>
            {/* Brand logo */}
            <a href="https://github.com/onepagezen/ob-frontend">
              <img 
                className="footer-logo" 
                alt="ob-frontend-logo-grey" 
                src="https://storage.googleapis.com/ob-frontend/ob-frontend-logo-grey.png"
              />
            </a>
            {/* Social icons */}
            <Content>
              <SocialIcons/>
            </Content>
            {/* Made with love by BrandName */}
            <Content>
              <p>
                Made with{" "}
                <Icon hasTextColor="danger" className="fa fa-heart"></Icon> by{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brandname
                </a>
              </p>
            </Content>
            {/* Built with Gatsby, Bulma, and Bloomer */}
            <Content isSize="small">
              <p>
                Copyright {new Date().getFullYear()}&nbsp;
                <a href="https://opzsys.com"> 
                  One Page Zen Systems, LLC
                </a>
              </p>
            </Content>
          </Column>
          <Column>
            <div>
              <h1>Become a squirrel expert!</h1>
              <p>Our weekly newsletter is filled with tons of useful squirrel care tips, as well as the week's funniest squirrel memes.  Signup today and receive:</p>
              <p><FcApproval/><strong> Squirrel guide packed with squirrel care tips</strong></p>
              <p><FcApproval/><strong> Icon pack filled with furry critter icons</strong></p>
              <p><FcApproval/><strong> Recipe bundle with 100+ acorn recipes</strong></p>
            </div>
            <MailingList/>
          </Column>
        </Columns>
      </Container>
    </Footer>
  )
}

export default MainFooter
