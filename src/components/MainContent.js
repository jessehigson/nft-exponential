import * as React from "react"
import { SocialList } from "./SocialList"

export const MainContent = ({
  title,
  instagramLinkUrl,
  instagramLinkTarget,
  twitterLinkUrl,
  twitterLinkTarget,
}) => (
  <section className="main-content">
    <div className="main-content__container container container--flex">
      <h2 className="main-content__title">{title}</h2>

      <div>Slider</div>

      <SocialList
        instagramLinkUrl={instagramLinkUrl}
        instagramLinkTarget={instagramLinkTarget}
        twitterLinkUrl={twitterLinkUrl}
        twitterLinkTarget={twitterLinkTarget}
      />
    </div>
  </section>
)
