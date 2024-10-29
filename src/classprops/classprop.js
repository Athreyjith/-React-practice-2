import React, { Component } from 'react'

export class classprop extends Component {
  render() {
    return (
      <div>
        <h1>hello {this.props.name}welcome to the {this.props.place} </h1>
   <p>{this.props.children}</p>
      </div>
    )
  }
}

export default classprop