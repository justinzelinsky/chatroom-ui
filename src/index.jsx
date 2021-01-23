import 'regenerator-runtime/runtime';

import App from 'components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'state/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
