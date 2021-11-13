import * as React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { MainContent } from "../components/MainContent"

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <MainContent
        title={RichText.asText(doc.title.raw)}
        instagramLinkUrl={doc.instagram_link.url}
        instagramLinkTarget={doc.instagram_link.target}
        twitterLinkUrl={doc.twitter_link.url}
        twitterLinkTarget={doc.twitter_link.target}
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
            localFile {
              id
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
      }
    }
  }
`

export default HomeTemplate
