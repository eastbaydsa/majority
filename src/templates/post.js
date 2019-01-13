import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
// import { graphql, Link } from 'gatsby'
import { graphql } from 'gatsby'
import he from 'he'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  img,
  imgAlt,
  imgCaption,
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="date">
              <p>
                <small>{date}</small>
              </p>
            </div>

            <h1
              className="title is-size-2 has-text-weight-bold is-bold-light"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />

            {img && (
              <figure
                className="featured-image"
                style={{ maxWidth: img.presentationWidth }}
              >
                <Img fluid={img} alt={imgAlt} />
                <figcaption dangerouslySetInnerHTML={{ __html: imgCaption }} />
              </figure>
            )}

            <div dangerouslySetInnerHTML={{ __html: content }} />

            {/* <div style={{ marginTop: `4rem` }}>
              <p>
                {date} - posted by{' '}
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  const { featured_media: image } = post
  const fluid = image && image.localFile.childImageSharp.fluid

  return (
    <Layout>
      <Helmet>
        <title>{he.decode(post.title)} | East Bay Majority</title>

        <meta property="twitter:card" content="summary" />
        {/* <meta property="twitter:site" content="@eastbaymajority" /> */}
        {/* <meta property="twitter:creator" content="@dsaeastbay" /> */}

        <meta
          property="og:url"
          content={`https://eastbaymajority.com/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={he.decode(post.title).trim()} />
        {post.excerpt && (
          <meta
            property="og:description"
            content={he.decode(
              post.excerpt
                .replace(/<p class="link-more.*/, '')
                .replace('<p>', '')
                .replace('</p>', '')
                .trim()
            )}
          />
        )}

        {image && <meta name="twitter:card" content="summary_large_image" />}
        {image && (
          <meta
            property="og:image"
            content={`https://eastbaymajority.com${fluid.src}`}
          />
        )}
        {image && image.alt_text && (
          <meta property="og:image:alt" content={image.alt_text.trim()} />
        )}
        {image && (
          <meta property="og:image:height" content={fluid.presentationHeight} />
        )}
        {image && (
          <meta property="og:image:width" content={fluid.presentationWidth} />
        )}

        <style>{`
          @media (max-width: ${fluid.presentationWidth}px) {
            figcaption {
              margin: 0 20px;
            }
          }
        `}</style>
      </Helmet>
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        img={fluid}
        imgAlt={image.alt_text}
        imgCaption={image.caption}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
    featured_media {
      id
      alt_text
      caption
    }
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        alt_text
        caption
        localFile {
          childImageSharp {
            fluid(maxWidth: 728) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`
