const React = require('react');

const { Provider, Consumer } = React.createContext({
  text: '',
  updateText: () => {}
});

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function withAppContext(Component) {
  function ContextualComponent(props) {
    return <Consumer>{context => <Component {...props} {...context} />}</Consumer>;
  }

  ContextualComponent.displayName = `withAppContext(${getDisplayName(Component)})`;

  return ContextualComponent;
}

module.exports = {
  Provider,
  Consumer,
  withAppContext
};
