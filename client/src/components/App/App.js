import React from 'react';
import './App.css';
import Header from '../Header'
import SideBar from '../SideBar'

import { Provider } from 'react-redux'
import store from '../../redux/store'

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <Header/>
        <SideBar/>
        <footer></footer>
      </div>
    </Provider>
  );

}

export default App;
