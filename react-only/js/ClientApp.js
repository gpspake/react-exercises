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

var PageTitleFactory = React.createFactory(PageTitle)

var FirstComponent = React.createClass({
	render: function () {
		return (
			div(null,
				PageTitleFactory({title: 'Page Title 1'}),
				PageTitleFactory({title: 'Page Title 2'}),
				PageTitleFactory({title: 'Page Title 3'}),
				PageTitleFactory({title: 'Page Title 4'})
			)
		)
	}
})

ReactDOM.render(React.createElement(FirstComponent), document.getElementById('app'))