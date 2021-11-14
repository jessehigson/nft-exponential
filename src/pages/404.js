import * as React from "react"
import { Layout } from "../components/Layout"

import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not found" />
    <section className="error-page error-page--404">
      <div className="error-page__container container container--content">
        <span className="error-page__status-code">404</span>
        <h1 className="error-page__title">Oh no!</h1>

        <p className="error-page__content">
          {"Unfortunately, the page you requested was not found…"}
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
