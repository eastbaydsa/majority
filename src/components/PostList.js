import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <section className="section">
        <div className="container">
          {/* <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div> */}
          {posts.map(({ node: post }) => {
            const { featured_media } = post
            const imgSrc =
              featured_media &&
              featured_media.localFile.childImageSharp.fluid.src
            const imgAlt = featured_media && featured_media.alt_text

            return (
              <div className="content post-listing" key={post.id}>
                <Link to={post.slug} className="post-listing__link">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                  />
                  <small className="post-listing__date">
                    {post.date}
                    {/*  - posted by{' '}
                   <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link> */}
                  </small>
                  <div className="post-listing__details">
                    {imgSrc && (
                      <div className="post-listing__image">
                        <img src={imgSrc} alt={imgAlt} />
                      </div>
                    )}
                    <div className="post-listing__description">
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.replace(
                              /<p class="link-more.*/,
                              ''
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="post-listing__clear" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
    featured_media {
      alt_text
      localFile {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
