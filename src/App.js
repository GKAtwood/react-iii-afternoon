import React, { Component } from 'react';
import './App.css';
import data from './data';
import Header from './Components/Header';
import InfoDisplay from './Components/InfoDisplay'





export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      personData: props.data,
      currentIndex: 0,
      displayIndex: 1
    }
    
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleIncrement() {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      displayIndex: this.state.displayIndex + 1
    })
  }
  
  handleDecrement() {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      displayIndex: this.state.displayIndex - 1
    })
  }
  
  handleDelete() {
    this.state.personData.splice(this.state.currentIndex, 1);
    this.setState({
      personData: this.state.personData
    });
  }
  
  render() {
    return(
      <div className = 'main'>
        <Header />
        <InfoDisplay />
        <InfoCard personInfo={this.state.personData[this.state.currentIndex]}/>
      </div>
    )
  }
}
   
   