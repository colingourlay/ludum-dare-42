const React = require('react');
const { Provider } = require('../AppContext');
const styles = require('./styles.css');

const SCENES = {
  game: require('../Game'),
  menu: require('../Menu')
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        scene: 'menu',
        title: 'Ludum Dare 42'
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
    const { scene } = this.state.data;
    const SceneComponent = SCENES[scene];

    return (
      <Provider value={this.state}>
        <div className={styles.root}>
          <SceneComponent />
        </div>
      </Provider>
    );
  }
}

module.exports = App;
