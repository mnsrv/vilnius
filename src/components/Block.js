import React, { PureComponent } from 'react'
import { Link } from 'gatsby'

export default class Block extends PureComponent {
  render() {
    return (
      <div className="block" style={this.props.style}>
        <div>
          {this.renderImage()}
          {this.renderTitle()}
          {this.renderSubtitle()}
          {this.renderText()}
        </div>
        {this.renderPreview()}
      </div>
    )
  }

  renderPreview = () => {
    const { title, preview } = this.props

    if (!preview) {
      return null
    }
    return <img src={preview} alt={title} className="blockPreview" />
  }

  renderImage = () => {
    const { title, imageUrl } = this.props

    if (!imageUrl) {
      return null
    }
    return <img src={imageUrl} alt={title} className="blockImage" />
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
    const { rating, title, url, done } = this.props

    if (!url) {
      if (done) {
        return (
          <s>
            {title} {rating}
          </s>
        )
      }
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
