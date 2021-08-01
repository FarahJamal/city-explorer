import './App.css';
import Main from './components/Main';
import React from "react";

class  App extends React.Component {
  render(){
    return (
      <div>
      <>
      <header className="App-header">
    
      <h1 >
        City Explorer
      </h1>
      <p>Enter the location below</p>
      </header>
      

      </>
      
      <Main/>

      </div>

      );
  }

}

export default App;
