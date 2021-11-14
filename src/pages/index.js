import * as React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import { Layout } from "../components/Layout"
import { MainContent } from "../components/MainContent"
import Seo from "../components/Seo"

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data
  const meta = []

  if (doc.meta_image !== undefined && doc.meta_image !== null) {
    meta.push({
      name: `og:image`,
      content: doc.meta_image.url,
    })
    meta.push({
      name: `twitter:image:src`,
      content: doc.meta_image.url,
    })
  }

  return (
    <Layout isHomepage>
      <Seo
        title={doc.meta_title}
        description={doc.meta_description}
        meta={meta}
      />
      <MainContent
        title={RichText.asText(doc.title.raw)}
        instagramLinkUrl={doc.instagram_link.url}
        instagramLinkTarget={doc.instagram_link.target}
        twitterLinkUrl={doc.twitter_link.url}
        twitterLinkTarget={doc.twitter_link.target}
        carouselLinkUrl={doc.carousel_link.url}
        carouselLinkTarget={doc.carousel_link.target}
        carouselImages={doc.carousel_images}
      />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        title {
          raw
        }
        carousel_images {
          carousel_image {
            fluid {
              base64
              src
            }
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        twitter_link {
          url
          target
        }
        carousel_link {
          url
          target
        }
        instagram_link {
          url
          target
        }
        meta_description
        meta_title
        meta_image {
          url(imgixParams: { width: 2000 })
        }
      }
    }
  }
`

export default HomeTemplate
