import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddMessage from './components/AddMessage/AddMessage'
import ListMessages from './components/ListMessages/ListMessages'
import { ListGroup } from 'react-bootstrap'



function App() {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
      <h1 className='titre'>MESSAGES</h1>
        <ListGroup>
          <ListMessages />
        </ListGroup>
        <AddMessage />
      </div>
      
    </div>
  );
}

export default App;

