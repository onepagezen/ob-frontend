import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FieldBody, Field, Control, Input, Button } from "bloomer"


export default class MailingList extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {

                if (result !== 'success') {
                    this.refs.test.innerHTML = msg;
                }
                this.refs.test.innerHTML = msg;
            })
            .catch(err => {
                this.refs.test.innerHTML = err;
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <FieldBody>
                      <Field>
                        <Control>
                          <Input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Your name"
                            name="name"
                          />
                        </Control>
                      </Field>
                      <Field>
                        <Control>
                          <Input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Your email"
                            name="email"
                          />
                        </Control>
                      </Field>
                      <Field>
                        <Control>
                          <Button isColor='secondary' type="submit">Submit</Button>
                        </Control>
                      </Field>
                    </FieldBody> 
                </form>
                <div id="output" ref='test'/>
            </div>
        )
    }
}