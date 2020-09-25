import React from 'react';
import { Link } from "gatsby"
import {
  Container,
  Column,
  Columns,
  Box,
} from "bloomer"
import moment from 'moment';
import { FaClock, FaUser, FaComment } from 'react-icons/fa'


const PostCard = ({post}) => {
  const { postId, title, date, excerpt, slug, author, featuredImage } = post;

return (
	<Box key={postId}>
		<Link to={`/posts/` + slug} style={{ color: "black", textDecoration: "none" }}>
			<Container>
				<h3 style={{ marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: title }} />
				<p className="meta-text">
          {/* Meta date section */}
          <span className="meta-section"><FaClock className="meta-icon"/>{moment(date).format('MMMM D, YYYY')}</span>
          {/* Meta author section */}
          <span className="meta-section"><FaUser className="meta-icon"/>{author.node.name}</span>
          {/* Meta comments section */}
          <span className="meta-section"><FaComment className="meta-icon"/>Comments</span>
        </p>
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