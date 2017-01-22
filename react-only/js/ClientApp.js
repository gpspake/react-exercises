var div = React.DOM.div
var h1 = React.DOM.h1

var PageTitle = React.createClass({
	render: function () {
		return (
			div(null,
				h1(null, 'Page Title')
			)
		)
	}
})

var FirstComponent = React.createClass({
	render: function () {
		return (
			div(null,
				React.createElement(PageTitle)
			)
		)
	}
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))