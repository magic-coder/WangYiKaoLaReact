import React, { Component } from 'react';

/*路由文件*/
import RouterIndex from './components/RouterIndex';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import clickApp from './store/reducer';

let store = createStore(clickApp);

class App extends Component {
  render() {
    return (
          <Router>
              <Provider store={store}>
                  <Route component={RouterIndex} />
              </Provider>
          </Router>

    );
  }
  componentDidMount(){

  }
}

App.propTypes = {

};

export default App;
