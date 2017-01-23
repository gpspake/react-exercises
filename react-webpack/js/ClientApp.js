/* global React ReactDOM */

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
