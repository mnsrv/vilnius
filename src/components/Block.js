import React, { PureComponent } from 'react'

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

    return (
      <img
        src={imageUrl}
        width="100"
        height="150"
        alt={title}
        className="blockImage"
      />
    )
  }

  renderTitle = () => {
    const { rating, title, year } = this.props

    return (
      <h3 className="blockTitle">
        {rating} {title}
        <span className="blockYear"> {year}</span>
      </h3>
    )
  }

  renderSubtitle = () => {
    const { subtitle } = this.props

    return <small className="blockSubtitle">{subtitle}</small>
  }

  renderText = () => {
    const { text } = this.props

    return <p dangerouslySetInnerHTML={{ __html: text }} />
  }
}
