import './App.css';
import "animate.css/animate.min.css";

import React from 'react';
import { useState }      from 'react';

import Home         from './pages/Home';
import Header       from './components/Header';
import Dashboard    from '../src/pages/Dashboard';

function App() {
  
  const [isLogged, setIsLogged] = useState(false);

  const logged = () => {

    setIsLogged(!isLogged);
  }

  return (

    <div className="App">

      {isLogged ? 
        <>
          <Header logged={logged}/>
          <Dashboard />
        </>
       : 
        <Home logged={logged}/>          
       }
    </div>
  );
}
export default App;
