import * as React from "react"
import { ImageGallery } from "./ImageGallery"
import { SocialList } from "./SocialList"

export const MainContent = ({
  title,
  instagramLinkUrl,
  instagramLinkTarget,
  twitterLinkUrl,
  twitterLinkTarget,
  carouselLinkUrl,
  carouselLinkTarget,
  carouselImages,
}) => (
  <section className="main-content">
    <div className="main-content__container container container--flex container--content">
      {title && <h2 className="main-content__title">{title}</h2>}

      <ImageGallery
        carouselLinkUrl={carouselLinkUrl}
        carouselLinkTarget={carouselLinkTarget}
        carouselImages={carouselImages}
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
