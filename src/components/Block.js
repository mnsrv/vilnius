import React, { PureComponent } from 'react'
import { Link } from 'gatsby'

export default class Block extends PureComponent {
  render() {
    return (
      <div className="block">
        {this.renderImage()}
        <div>
          {this.renderTitle()}
          {this.renderSubtitle()}
          {this.renderText()}
        </div>
      </div>
    )
  }

  renderImage = () => {
    const { title, imageUrl } = this.props

    if (!imageUrl) {
      return null
    }
    return (
      <a
        className="blockImageLink"
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} width="100" alt={title} className="blockImage" />
      </a>
    )
  }

  renderTitle = () => {
    return (
      <h3 className="blockTitle">
        {this.renderUrl()}
        {this.renderYear()}
      </h3>
    )
  }

  renderUrl = () => {
    const { rating, title, url } = this.props

    if (!url) {
      return (
        <span>
          {title} {rating}
        </span>
      )
    }
    return (
      <Link to={url}>
        {title} {rating}
      </Link>
    )
  }

  renderYear = () => {
    const { year } = this.props

    if (!year) {
      return null
    }
    return <span className="blockYear"> {year}</span>
  }

  renderSubtitle = () => {
    const { subtitle } = this.props

    if (!subtitle) {
      return null
    }
    return (
      <small className="blockSubtitle">
        <i>{subtitle}</i>
      </small>
    )
  }

  renderText = () => {
    const { text } = this.props

    if (!text) {
      return null
    }
    return (
      <div className="blockText" dangerouslySetInnerHTML={{ __html: text }} />
    )
  }
}
