import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Progress, Tag, Field, Label, Control, Input, Button, TextArea} from "bloomer"

// Create a GraphQL mutation for comment submissions
const commentSubmitQuery = gql`
	mutation($author: String, $commentOn: Int, $parent: ID, $content: String, $authorEmail: String, $authorUrl: String) {
		createComment(
			input: {
				clientMutationId: "CreateComment"
				author: $author
				commentOn: $commentOn
				parent: $parent
				content: $content
				authorEmail: $authorEmail
				authorUrl: $authorUrl
			}
		) {
			success
		}
	}
`;

// Our main component class
class CommentForm extends React.Component {
	constructor(props) {
    super();

    // Bind input changes
		this.handleInputChange = this.handleInputChange.bind(this);
    
		// Set the initial state
		this.state = {
      commentStatus: false,
      inputIsValid: false,
      emailIsValid: false,
			post: props.postId,
			parent: props.parent,
			comment: '',
			author: '',
			email: '',
			url: '',
		};
  }

	// Handles input change events
	handleInputChange(event) {
		const target = event.target;
		const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Regular expression for validating email address
    const regexEmail = /\S+@\S+\.\S+/;

    // Check for valid email address
    {(regexEmail.test(String(this.state.email).toLowerCase())) && (this.setState({emailIsValid: true}))}
    
    // Monitor that inputs values are valid
    {this.state.comment !== "" && this.state.author !== "" && this.state.email !== "" ?
      this.setState({ inputIsValid: true })
    : this.setState({ inputIsValid: false })}

		// Sets the state of the input field
		this.setState({
			[name]: value,
		});
  }

	// Renders the comment form elements
	renderCommentForm() {

    // Avoids repetion of this.state in the return statement
    const { inputIsValid, emailIsValid } = this.state;

    // Function to clear all input fields when 'Cancel' button is clicked
    const cancelWrapper = () => {
      this.setState({ comment: '', author: '', email: '', url: '' });
      this.props.action();
    }

		return (
			// Wrap it in our mutation
			<Mutation
				mutation={commentSubmitQuery}
				// Set completion state
				onCompleted={() => {
					this.setState({ commentStatus: 'success' });
				}}
				// Set error state
				onError={() => {
					this.setState({ commentStatus: 'error' });
				}}
			>
				{(addComment) => (
					// Render the form
					<form className="comment-form"
						onSubmit={(event) => {
							// Prevent default form submit behavior
							event.preventDefault();
							// Set initial loading state on submission
							this.setState({ commentStatus: 'loading' });
							// Run the mutation
							{(inputIsValid && emailIsValid) ?
							addComment({
								variables: {
									author: this.state.author,
									commentOn: this.state.post,
									parent: this.state.parent,
									content: this.state.comment,
									authorEmail: this.state.email,
									authorUrl: this.state.url,
								},
              })
              : this.setState({ commentStatus: "error" })}
						}}
					>
						<h3><strong>Leave a Reply</strong></h3>
					<p>Your email address will not be published.  Required fields are marked *</p>
						<Field>
							<Label htmlFor="comment">Comment *</Label>
							<Control>
								<TextArea name="comment" value={this.state.comment} maxLength="5000" onChange={this.handleInputChange} />
							</Control>
						</Field>
						
						<Field>
						<Label htmlFor="author">Name *</Label>
							<Control>
								<Input name="author" value={this.state.author} maxLength="80" onChange={this.handleInputChange} />
							</Control>
						</Field>
						
						<Field>
						<Label htmlFor="email">Email *</Label>
							<Control>
								<Input name="email" value={this.state.email} maxLength="80" onChange={this.handleInputChange} />
							</Control>
						</Field>

						<Field>
						<Label htmlFor="author">Website</Label>
							<Control>
								<Input name="url" value={this.state.url} maxLength="80" onChange={this.handleInputChange}/>
							</Control>
						</Field>
										
						<Field isGrouped>
							<Control>
								<Button isColor="primary" name="submit" type="submit" value="Post Comment">Submit</Button>
							</Control>
							<Control>
								<Button isColor="secondary" onClick={cancelWrapper}>Cancel</Button>
							</Control>
						</Field>
					</form>
				)}
			</Mutation>
		);
	}

	// Render the comment form
	render() {
		// Check comment status from component state and display either notification or form
		switch (this.state.commentStatus) {
			case 'success':
				return <Tag isColor="success" isSize='medium'>{"Your comment has been successfully submitted."}</Tag>
			case 'loading':
				return <Progress isColor='primary' isSize='small' max={100} />
			case 'error':
				return <>{this.renderCommentForm()}<Tag isColor='danger' isSize='medium'>{"One or more of the required fields is missing or invalid."}</Tag></>
			default:
				return this.renderCommentForm();
    }
	}
}

export default CommentForm;
