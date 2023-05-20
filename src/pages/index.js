import React from "react";
import { graphql, Link } from "gatsby";

import "../assets/generalStyle.css";

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div class="mainContent">
      <header class='header'>
        <h1>Maks Tamoian's feed</h1>
      </header>

      {posts.map((post) => (
        <article key={post.id}>
          <Link to={post.fields.slug} class="link">
            <h3>{post.frontmatter.title}</h3>
          </Link>
          <small>{post.frontmatter.date}</small>
          <p>{post.excerpt}</p>

          <Link to={post.fields.slug} class="link">
            <p class="readMore">Read more</p>
          </Link>
        </article>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
