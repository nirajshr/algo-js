var React = require('react');

function getHref(name) {

}
var ListOfLinks = (function () { 
	function createLi(item, handleClick) {
		var a = React.createElement('a', { href: "#", onClick: function () { handleClick(item.name); } }, item.title);
		return React.createElement('li', { key: item.name }, a);
	}

	return React.createClass({
		render: function () {
			var handleClick = this.props.handleClick;

			var lis = this.props.items.map(function (el) { 
				return createLi(el, handleClick);
			});

			return React.createElement('ul', null, lis);
		}
	});
}) ();

var CodeArea = (function () {
	function emptyShowcaseView() {
		return React.createElement('p', null, "Empty Showcase");
	}

	function getShowcase(name) {
		if (name === "BST1") {
			var mod = require('./sw_bst1.js');
			return mod();
		}

		return emptyShowcaseView(); 
	}

	return React.createClass({
		render: function () {
			return React.createElement('div', null, getShowcase(this.props.name));
		}
	});
}) ();

var AlgoApp = React.createClass({
	getInitialState: function () {
		return {
			items: [
				{ title: 'Binary Search Tree', name: 'BST1' },
				{ title: 'Sample', name: 'sample' }
			],
			current_item: 'BST1'
		};
	},
	onLinkSelect: function (name) {
		this.state.current_item = name;
		this.setState(this.state);
		console.log(name);
	},
  render: function() {
  	var ul = React.createElement(ListOfLinks, { items: this.state.items, handleClick: this.onLinkSelect });
  	var code_area = React.createElement(CodeArea, { name: this.state.current_item });

    return React.createElement(
      "div",
      null,
      "Algo App",
      ul,
      code_area
    );
  }
});

module.exports = AlgoApp;
