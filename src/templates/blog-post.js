import React from "react";
import { Link, graphql } from "gatsby";

import "../assets/generalStyle.css";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <div class="mainContent">
      <header class='header'>
        <a href="/">
          <h3>Maks Tamoian's feed</h3>
        </a>
      </header>
      <h1>{post.frontmatter.title}</h1>
      <small class="date">{post.frontmatter.date}</small>
      <div class="content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
