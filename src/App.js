import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './media/css/style.css'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Modal from './components/Modal/Modal';
import Message from './components/Message/Message';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/messages' component={Message} />
      <Modal/>
    </div>
  );
}

export default App;
