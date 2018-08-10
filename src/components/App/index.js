const React = require('react');
const styles = require('./styles.css');

class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>ludum-dare-42</h1>
      </div>
    );
  }
}

module.exports = App;
