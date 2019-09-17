import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NameForm from './components/NameForm';
import HumanForm from './components/HumanForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      {/* <NameForm /> */}
      <HumanForm />
    </div>
  );
}

export default App;
