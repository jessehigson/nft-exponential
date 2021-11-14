import * as React from "react"
import Image from "./image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export const ImageGallery = ({
  carouselLinkUrl,
  carouselLinkTarget,
  carouselImages,
}) => (
  <div className="carousel">
    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
      {carouselImages.map((carouselImage, index) => (
        <div className="carousel__item" key={`carousel-item=${index}`}>
          {carouselLinkUrl && (
            <a
              className="carousel__link"
              href={carouselLinkUrl}
              target={carouselLinkTarget}
            >
              <Image
                image={carouselImage.carousel_image}
                className="carousel__image"
                sizes="100vw"
              />
            </a>
          )}
        </div>
      ))}
    </Carousel>
  </div>
)
