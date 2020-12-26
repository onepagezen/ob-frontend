import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Location } from '@reach/router';
import moment from 'moment';
import { Link } from 'gatsby';
import { Progress } from "bloomer";
import CommentForm from '../comments/comment-form';

// Create a GraphQL query for the comment list.
const commentQuery = gql`
query($postId: ID!) {
    comments(first: 1000, where: { contentId: $postId, contentStatus: PUBLISH, orderby: COMMENT_DATE, order: ASC }) {
      nodes {
          ...CommentFields
      }
    }
  }
  fragment CommentFields on Comment {
    content
    commentId
    date
    parent {
      node {
        id
      }
    }
    replies(where: { orderby: COMMENT_DATE, order: ASC }) {
      edges {
        node {
          content
          commentId
          date
          author {
            node {
              name
              url
            }
          }   
        }
      }
    }
    author {
      node {
          name
          url
      }
    }
  }
`;

// Main component class.
class CommentList extends React.Component {
  constructor(props) {
    super();
    
  // Bind the this context to input changes
  this.handler = this.handler.bind(this);
  
  // Set the initial state.
  this.state = {
    showing: false,
    openId: ''
  };
};

  // This method will be sent to the child component
  handler() {
    this.setState({
      showing: false
  });
}

  render() {
    const postId = this.props.postId;

    // Showing is used to show/hide form
    const { showing, openId } = this.state;

    // Helper function for formatting dates with MomentJS
    const formatDate = date => moment(date).format('MMMM Do, YYYY [at] h:mma')

    // Helper function to generate location
    const generateCommentLink = (commentId, commentDate) => (
      <Location>
        {({ location }) => (
          <Link to={`${location.pathname}/#comment-${commentId}`}>{formatDate(commentDate)}</Link>
        )}
      </Location>
    )

    // Helper function for generating each comment
    const generateComment = (comClass, comId, authUrl, authName, comDate, comContent) => (
      <div className={comClass} id={`comment-${comId}`}>
          <div className="comment-author">
              <a href={authUrl}>{authName}</a> says:<br/> 
              {generateCommentLink(comId, comDate)}
          </div>
          <div className="comment-content" dangerouslySetInnerHTML={{ __html: comContent }} />
      </div>
    )

    return (
      // Wrap the comment list in our query
      <>
        <Query query={commentQuery} variables={{ postId }}>
          {({ loading, error, data }) => {
            
            // Loading and error messages
            if (loading) return <Progress isColor='primary' isSize='small' max={100} />
            if (error) return 'Error loading comments...'; 

            // If comments don't exist, then don't attempt to display them (prevents undefined error)
            if (data.comments.nodes.length < 1) return false;
            if (data.comments.nodes.parent < 1) return false;

              return (	
                // Display the comment list
                <>
                  <h3 className="comment-list-header">
                    {'Comments'}
                  </h3>
                  <div className="comment-list">
                    <div>
                      
                      {/* Generate parent comments */}
                      {data.comments.nodes.map((d, idx) => (
                        <div className={"comment-body-container"} key={idx}>
                          {(d.parent === null) &&
                          (generateComment(
                            "parent-comment", 
                            d.commentId, 
                            d.author.node.url, 
                            d.author.node.name, 
                            d.date, 
                            d.content
                            )
                          )}
                          
                          {/* Generate child comments */}
                          {((d.parent === null) && (d.replies.edges.length >= 1)) &&
                            d.replies.edges.map((d, idx) => (
                            <div key={idx}>
                              {generateComment(
                                "child-comment", 
                                d.node.commentId, 
                                d.node.author.node.url, 
                                d.node.author.node.name, 
                                d.node.date, 
                                d.node.content
                                )}
                            </div>
                            )
                          )}
                          
                          { // IMPORTANT FUNCTIONALITY - DO NOT REMOVE //
                          /* Handle button click.  Un-commenting this block inserts a REPLY button at the bottom of each WordPress comment block.  Clicking the REPLY button will display the comment form inside of the comment block, and hide it from the bottom of the page.  The intended purpose of this feature is to allow users to reply to child comments.  Because all replies are submitted as a replies to the parent comment, they will display correctly since they fit the condition of only allowing nested comments two-levels deep.  However, if an admin were to reply to the comment through the /edit-comments.php page, it would not display.  This is because the admin's reply would be a reply to the child comment, and not to the parent comment, thereby making the comment 3-levels deep.  Because the current functionality only allows for comments that are two-levels deep, the admin's reply to the child comment would not display. */ 
                          // ((d.parent === null && openId !== d.commentId) || (d.parent === null && this.state.showing === false)) ?
                          //   <a className="comment-reply-link" onClick={() => this.setState({ showing: true, openId: d.commentId })}>
                          //     {(showing && (openId === d.commentId) ? "Reply" : "Reply")}
                          //   </a> 
                          // : null
                          }
                          
                          {// Display comment form
                          (showing === true && d.parent === null && openId === d.commentId)
                            ? <CommentForm postId={this.props.postId} parent={d.commentId} action={this.handler}/>
                          : null
                          }

                        </div>
                      ))}
                    </div> 
                  </div>  
                </>
              );
            }}
        </Query>
        {/* Generate comment form on bottom of post page */}
        {(showing === false) 
          ? <CommentForm postId={this.props.postId} parent={null} action={this.handler}/>
        : null}
      </>
    );
  }
}

export default CommentList;