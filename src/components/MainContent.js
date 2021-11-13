import * as React from "react"

export const MainContent = ({ title }) => (
  <section className="main-content">
    <div className="main-content__container container container--flex">
      <h2 className="main-content__title">{title}</h2>
    </div>
  </section>
)
