import * as React from "react"
import InstagramImage from "../assets/icons/instagram.svg"
import TwitterImage from "../assets/icons/twitter.svg"

export const SocialList = ({
  instagramLinkUrl,
  instagramLinkTarget,
  twitterLinkUrl,
  twitterLinkTarget,
}) => (
  <ul className="social-list">
    {instagramLinkUrl && (
      <li className="social-list__item">
        <a
          className="social-list__link"
          href={instagramLinkUrl}
          target={instagramLinkTarget}
        >
          <InstagramImage />
          <span className="screenreader-text">Instagram</span>
        </a>
      </li>
    )}

    {twitterLinkUrl && (
      <li className="social-list__item">
        <a
          className="social-list__link"
          href={twitterLinkUrl}
          target={twitterLinkTarget}
        >
          <TwitterImage />
          <span className="screenreader-text">Twitter</span>
        </a>
      </li>
    )}
  </ul>
)
