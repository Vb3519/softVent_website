import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './redux/store';

const appContainer = document.getElementById('root');

if (appContainer) {
  const root: ReactDOM.Root = ReactDOM.createRoot(appContainer);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
