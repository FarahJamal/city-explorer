import './App.css';
import Main from './components/Main';
import React from "react";
import Footer from './components/Footer';
import Image from "./components/gifs/g1.gif"

class  App extends React.Component {
  render(){
    return (
      <body>
      <>
      <header className="App-header">
      <h1 >
        City Explorer
      </h1>
      <p>Enter the location below</p>
      <img src={Image} />

      </header>
      

      </>
      
      <Main/>
      <Footer/>
      </body>

      );
  }

}

export default App;
