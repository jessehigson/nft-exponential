import * as React from "react"
import { Carousel } from "./Carousel"
import { SocialList } from "./SocialList"

export const MainContent = ({
  title,
  instagramLinkUrl,
  instagramLinkTarget,
  twitterLinkUrl,
  twitterLinkTarget,
  carouselLinkUrl,
  carouselLinkTarget,
}) => (
  <section className="main-content">
    <div className="main-content__container container container--flex">
      {title && <h2 className="main-content__title">{title}</h2>}

      <Carousel
        carouselLinkUrl={carouselLinkUrl}
        carouselLinkTarget={carouselLinkTarget}
      />

      <SocialList
        instagramLinkUrl={instagramLinkUrl}
        instagramLinkTarget={instagramLinkTarget}
        twitterLinkUrl={twitterLinkUrl}
        twitterLinkTarget={twitterLinkTarget}
      />
    </div>
  </section>
)
