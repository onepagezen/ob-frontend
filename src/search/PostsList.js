import React from 'react';
import gql from 'graphql-tag';
import PostCard from './PostCard';
import { useQuery } from '@apollo/react-hooks';
import { Button, Progress } from "bloomer"


// This is the query that Apollo Client will send to the WP site.
const PostsQuery = gql`
  query GET_PAGINATED_POSTS(
    $searchQuery: String
    $first: Int
    $last: Int
    $after: String
    $before: String
    $tag: String
  ) {
    posts(where: { search: $searchQuery, tag: $tag }, first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
          title
          date
          excerpt
          slug
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
};

// Jump to top of page when user clicks 'Next' or 'Previous' button
const topFunction = () => {
  window.scrollTo(0, 0)
}

// Component that shoes the paginated list of posts
const PostList = ({ data, error, loading, fetchMore }) => {
  const { posts } = data;
  return (
    <div>
      {posts && posts.edges ? (
        <div>
            {data.posts.edges.map(edge => {
              const { node: post } = edge;
              const { postId } = post;
              return (
                <PostCard key={postId} post={post} />
              );
            })}        
          <div>
            {posts.pageInfo.hasPreviousPage ? (
              <Button isColor='primary'
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: null,
                      after: null,
                      last: 3,
                      before: posts.pageInfo.startCursor || null,
                      tag: null
                    },
                    updateQuery
                  });
                  topFunction()
                }}
              >
                &laquo; Previous
              </Button>
            ) : null}
            &nbsp;
            {posts.pageInfo.hasNextPage ? (
              <Button isColor='primary'
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: 3,
                      after: posts.pageInfo.endCursor || null,
                      last: null,
                      before: null,
                      tag: null
                    },
                    updateQuery
                  });
                  topFunction()
                }}
              >
                Next &raquo;
              </Button>
            ) : null}
          </div>
        </div>
      ) : (
        <div>No posts were found...</div>
      )}
    </div>
  );
};

const Posts = ({ searchQuery, tag }) => {
  const variables = {
    searchQuery: searchQuery,
    tag: tag,
    first: 3,
    last: null,
    after: null,
    before: null
  };
  const { data, error, loading, fetchMore } = useQuery(PostsQuery, {
    variables,
    notifyOnNetworkStatusChange: true
  });

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  // Display loading bar
  if (loading) {
    return <Progress isColor='primary' isSize='small' max={100} />;
  }

  return (
    <PostList
      error={error}
      loading={loading}
      data={data}
      fetchMore={fetchMore}
    />
  );
};

export default Posts;
