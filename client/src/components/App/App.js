import React from 'react';
import './App.css';
import Header from '../Header'
import SideBar from '../SideBar'
import Shops from '../Shops'
import Income from '../Income'
import Purchases from '../Purchases'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'

function App() {
  return (
    <Provider store = { store }>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <SideBar/>
          <div className="main">
            <Switch>
              <Route exact path='/' component={Purchases}/>
              <Route path='/income' component={Income}/>
              <Route path='/shops' component={Shops}/>
            </Switch>
          </div>
          <footer></footer>
        </div>      
      </BrowserRouter>
    </Provider>
  );

}

export default App;
