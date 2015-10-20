var React = require('react');


var View = React.createClass({
	render: function () {
		return React.createElement('p', null, "Binary Search Tree");
	}
});

function getView() {
	return React.createElement(View);
}

module.exports = getView;