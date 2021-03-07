import React, {Component} from 'react'

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <h1>"93 specs, 0 failures"</h1>
      </div>
    )
  }
}

export default Image