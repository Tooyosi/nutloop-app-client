import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import store from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
