import 'regenerator-runtime/runtime';

import App from 'components/App';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from 'state/store';
import { GlobalStyle } from 'styles/globals';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
