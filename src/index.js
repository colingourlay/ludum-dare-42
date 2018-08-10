const React = require('react');
const { render } = require('react-dom');

function init() {
  const App = require('./components/App');
  render(<App />, root);
}

init();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      init();
    } catch (err) {
      const ErrorBox = require('./components/ErrorBox');
      render(<ErrorBox error={err} />, root);
    }
  });
}
