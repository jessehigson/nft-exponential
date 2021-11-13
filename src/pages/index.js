// index.js file

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
      <MainContent title={RichText.asText(doc.title.raw)} />
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
        instagram_link {
          id
        }
        twitter_link {
          id
        }
        carousel_link {
          id
        }
      }
    }
  }
`

export default HomeTemplate
