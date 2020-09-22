import React from 'react';
import { Link } from "gatsby"
import {
  Container,
  Column,
  Columns,
  Box,
} from "bloomer"


// Helper function for formatting dates.
const formatDate = date => new Date( date ).toDateString();

const PostCard = ({post}) => {
  const { postId, title, date, excerpt, slug, author, featuredImage } = post;
  const { name: authorName } = author;

return (
	<Box key={postId}>
		<Link to={`/posts/` + slug} style={{ color: "black", textDecoration: "none" }}>
			<Container>
				<h3 style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: title }} />
				<p style={{ marginBottom: "1em", fontSize: ".9em", color: "grey" }}>Written by {authorName} on {formatDate(date)}</p>
			</Container>
			<Columns>
				<Column isSize='1/4'>
					{ featuredImage && // If a featured image exists, display it.
						<img src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} className="post-card__image" />
					}
				</Column>
				<Column>
					<p className="text-wrap" style={{ textOverflow: "hidden" }} dangerouslySetInnerHTML={{ __html: excerpt.substr(0, 314) + ' [...]' }} />
				</Column>
			</Columns>
		</Link>
	</Box>
  )
};

  export default PostCard;