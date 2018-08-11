const React = require('react');
const { withAppContext } = require('../AppContext');
const styles = require('./styles.css');

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    this.props.dispatch('MERGE', { text: target.value });
  }

  render() {
    const { text } = this.props.data;

    return (
      <div className={styles.root}>
        <input defaultValue={text} onChange={this.onInputChange} onInput={this.onInputChange} />
        <p>{text}</p>
      </div>
    );
  }
}

module.exports = withAppContext(Game);
