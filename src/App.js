import React  from 'react';
import './App.css';
import data from './data';
import Header from './Components/Header';
import InfoDisplay from './Components/InfoDisplay'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data : data
    }
  }
  
  render() {
    return (
      <div className="main">
        <Header/>
        <InfoDisplay data={data}/>
        
      </div>
    );
  }
}

export default App;
   