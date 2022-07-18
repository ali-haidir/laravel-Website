'use strict';

var stateless = ReactDOM.createRoot(document.querySelector('#stateless'));
stateless.render("Stateless");

function Hello() {
	return React.createElement(
		'h1',
		null,
		'The Stateless JSX is Working...'
	);
}
var statelessjsx = ReactDOM.createRoot(document.querySelector('#statelessjsx'));
statelessjsx.render(React.createElement(Hello, null));