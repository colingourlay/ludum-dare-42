const React = require('react');
const { withAppContext } = require('../AppContext');
const styles = require('./styles.css');

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.updateText(event.target.value);
  }

  render() {
    return (
      <div className={styles.root}>
        <input defaultValue={this.props.text} onChange={this.onInputChange} onInput={this.onInputChange} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

module.exports = withAppContext(Game);
