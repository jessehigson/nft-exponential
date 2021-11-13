import { Link } from "gatsby"
import * as React from "react"
import LogoImage from "../assets/icons/logo.svg"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container container--flex">
        <Link to="/" className="header__logo logo">
          <LogoImage />
          <h1 className="screenreader-text">nft.exponential</h1>
        </Link>
      </div>
    </header>
  )
}
