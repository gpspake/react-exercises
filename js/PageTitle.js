import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var PageTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color, fontWeight: '300'}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default PageTitle
