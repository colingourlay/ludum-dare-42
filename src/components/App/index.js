const React = require('react');
const { Provider } = require('../AppContext');
const Game = require('../Game');
const styles = require('./styles.css');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        text: 'Ludum Dare 42'
      },
      dispatch: this.dispatch.bind(this)
    };
  }

  dispatch(type, actionData) {
    switch (type) {
      case 'MERGE':
        this.setState(({ data }) => ({ data: { ...data, ...actionData } }));
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className={styles.root}>
          <Game />
        </div>
      </Provider>
    );
  }
}

module.exports = App;
