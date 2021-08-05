import './App.css';
import Main from './components/Main';
import React from "react";
import Footer from './components/footer';

class  App extends React.Component {
  render(){
    let x=Math.floor(Math.random()*(6-1)+1)

    return (
      <body>
      <>
      <header className="App-header">
      
      
      <img style={{'height':'100px'}}
       src={`https://raw.githubusercontent.com/FarahJamal/city-explorer/master/src/components/gifs/g${x}.gif`} alt=""/>

      <h1 >
        City Explorer
      </h1>
      <p>Enter the location below</p>

      </header>
      

      </>
      <div style={{'float':'left'}}>
      <Main/>
      </div>
      <Footer/>
      </body>

      );
  }

}

export default App;
