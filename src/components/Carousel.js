import * as React from "react"

export const Carousel = ({ carouselLinkUrl, carouselLinkTarget }) => (
  <div className="carousel">
    {carouselLinkUrl && (
      <a
        className="carousel__link"
        href={carouselLinkUrl}
        target={carouselLinkTarget}
      >
        <div className="carousel__inner">Carousel</div>
      </a>
    )}
  </div>
)
