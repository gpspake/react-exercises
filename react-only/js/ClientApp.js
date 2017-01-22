var div = React.DOM.div
var h1 = React.DOM.h1

var PageTitle = React.createClass({
	render: function () {
		return (
			div(null,
				h1(null, this.props.title)
			)
		)
	}
})

var FirstComponent = React.createClass({
	render: function () {
		return (
			div(null,
				React.createElement(PageTitle, {title: 'Page Title 1'}, null),
				React.createElement(PageTitle, {title: 'Page Title 2'}, null),
				React.createElement(PageTitle, {title: 'Page Title 3'}, null),
				React.createElement(PageTitle, {title: 'Page Title 4'}, null)
			)
		)
	}
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))