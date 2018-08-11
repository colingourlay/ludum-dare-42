const React = require('react');
const { Consumer } = require('../AppContext');
const styles = require('./styles.css');

class Game extends React.Component {
  render() {
    return (
      <Consumer>
        {({ text, updateText }) => (
          <div className={styles.root}>
            <input value={text} onInput={event => updateText(event.target.value)} />
            <p>{text}</p>
          </div>
        )}
      </Consumer>
    );
  }
}

module.exports = Game;
