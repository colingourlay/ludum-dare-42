const React = require('react');
const { withAppContext } = require('../AppContext');
const styles = require('./styles.css');

class Game extends React.Component {
  render() {
    const {
      data: { title },
      dispatch
    } = this.props;

    return (
      <div className={styles.root}>
        <h1>{`${title} > Game`}</h1>
        <button onClick={() => dispatch('MERGE', { scene: 'menu' })}>Menu</button>
      </div>
    );
  }
}

module.exports = withAppContext(Game);
