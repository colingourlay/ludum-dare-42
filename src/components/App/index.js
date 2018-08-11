const React = require('react');
const { Provider } = require('../AppContext');
const Game = require('../Game');
const styles = require('./styles.css');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'Ludum Dare 42',
      updateText: this.updateText.bind(this)
    };
  }

  updateText(text) {
    this.setState({ text });
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
