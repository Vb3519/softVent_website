import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';

const appContainer = document.getElementById('root');

if (appContainer) {
  const root: ReactDOM.Root = ReactDOM.createRoot(appContainer);

  root.render(<App />);
}
