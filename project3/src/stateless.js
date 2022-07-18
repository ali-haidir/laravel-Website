'use strict';
const stateless = ReactDOM.createRoot(document.querySelector('#stateless'));
stateless.render("Stateless");

function Hello() {
	return <h1>The Stateless JSX is Working...</h1>;
}
const statelessjsx = ReactDOM.createRoot(document.querySelector('#statelessjsx'));
statelessjsx.render(<Hello />);