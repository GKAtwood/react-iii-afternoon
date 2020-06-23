import React, { Component } from 'react';
import './App.css';
import data from './data';
import Main from './Components/Main';
import FileTwo from './Components/FileTwo'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:{},
      dataId: 1,
    }

  }
  render(){
    return(
  <div className="App">
     
     <Main />
     <FileTwo />


    <button >Previous</button>
    <button>Next</button>
    </div>
    )
  }
}

export default App;
