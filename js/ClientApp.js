import React from 'react'
import ReactDOM from 'react-dom'
import PageTitle from './PageTitle'

var div = React.DOM.div

var PageTitleFactory = React.createFactory(PageTitle)

var FirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        PageTitleFactory({title: 'Page Title 1', color: 'peru'}),
        PageTitleFactory({title: 'Page Title 2', color: 'tomato'}),
        PageTitleFactory({title: 'Page Title 3', color: 'rebeccapurple'}),
        PageTitleFactory({title: 'Page Title 4', color: 'mediumaquamarine'})
      )
    )
  }
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))
