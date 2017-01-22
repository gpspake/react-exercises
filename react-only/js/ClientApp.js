var div = React.DOM.div
var h1 = React.DOM.h1

var FirstComponent = React.createClass({
	render: function () {
		return (
			div(null,
				h1(null, 'FirstComponent')
			)
		)
	}
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))