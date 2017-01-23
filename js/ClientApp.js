import React from 'react'
import ReactDOM from 'react-dom'
import PageTitle from './PageTitle'

var FirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <PageTitle title='Page Title 1' color='peru' />
        <PageTitle title='Page Title 2' color='tomato' />
        <PageTitle title='Page Title 3' color='rebeccapurple' />
        <PageTitle title='Page Title 4' color='mediumaquamarine' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))
