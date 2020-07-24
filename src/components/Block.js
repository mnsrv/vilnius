import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default class Block extends PureComponent {
  render() {
    return (
      <div className="block" style={this.props.style}>
        {this.renderImage()}
        <div className="blockRow">
          <div>
            {this.renderTitle()}
            {this.renderSubtitle()}
            {this.renderText()}
          </div>
          {this.renderPreview()}
        </div>
      </div>
    )
  }

  renderPreview = () => {
    const { title, preview, fixedPreview, fluidPreview } = this.props

    if (fixedPreview) {
      return (
        <Img
          fixed={fixedPreview}
          title={title}
          alt={title}
          fadeIn={false}
          className="blockPreview"
        />
      )
    }
    if (fluidPreview) {
      return (
        <Img
          fluid={fluidPreview}
          title={title}
          alt={title}
          fadeIn={false}
          className="blockPreview"
        />
      )
    }
    if (preview) {
      return <img src={preview} alt={title} className="blockPreview" />
    }
    return null
  }

  renderImage = () => {
    const { subtitle, imageUrl, fixed, fluid } = this.props

    if (fixed) {
      return (
        <Img
          fixed={fixed}
          title={subtitle}
          alt={subtitle}
          fadeIn={false}
          className="blockImage"
        />
      )
    }
    if (fluid) {
      return (
        <Img
          fluid={fluid}
          title={subtitle}
          alt={subtitle}
          fadeIn={false}
          className="blockImage"
        />
      )
    }
    if (imageUrl) {
      return <img src={imageUrl} alt={subtitle} className="blockImage" />
    }
    return null
  }

  renderTitle = () => {
    const url = this.renderUrl()
    const year = this.renderYear()

    if (!url && !year) {
      return null
    }
    return (
      <h4 className="blockTitle">
        {url}
        {year}
      </h4>
    )
  }

  renderUrl = () => {
    const { title, url, done } = this.props

    if (!title) {
      return null
    }
    if (url) {
      return <Link to={url}>{title}</Link>
    }
    if (done) {
      return <s>{title}</s>
    }
    return <span>{title}</span>
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
