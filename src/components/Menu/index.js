const React = require('react');
const { withAppContext } = require('../AppContext');
const styles = require('./styles.css');

const Menu = ({ data: { title }, dispatch }) => (
  <div className={styles.root}>
    <h1>{`${title} > Menu`}</h1>
    <button onClick={() => dispatch('MERGE', { scene: 'game' })}>Game</button>
  </div>
);

module.exports = withAppContext(Menu);
