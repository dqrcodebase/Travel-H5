import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import Home from './pages/home';
import dva from './utils/dva';
import models from './models';
import { Provider } from '@tarojs/redux';

import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [

    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'HISPANITAS',
      navigationBarTextStyle: 'black',
    },
  };

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
