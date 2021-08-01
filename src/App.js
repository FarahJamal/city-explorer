import './App.css';
import Main from './components/Main';
import React from "react";
import Footer from './components/footer';

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
      <Footer/>
      </div>

      );
  }

}

export default App;
