import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var PageTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({style: {color: this.props.color, fontWeight: '300'}}, this.props.title)
      )
    )
  }
})

export default PageTitle
