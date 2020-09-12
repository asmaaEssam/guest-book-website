import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './media/css/style.css'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;
