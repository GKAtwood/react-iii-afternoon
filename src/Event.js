import React, {Component} from 'react';
import DisplayList from './DisplayList';
import Nav from './Nav';
import data from './Data';


class Event extends Component {
   constructor() {
      super();
      this.state = {
         currentState: 0
      }

      this.changeStateNext = this.changeStateNext.bind(this);
      this.changeStatePrev = this.changeStatePrev.bind(this);
      this.resetState = this.resetState.bind(this);
   }
   changeStateNext() {
      const {currentState} = this.state;
      if(currentState === data.length ) {
         this.setState({currentState: 0});
      } else {
         this.setState({currentState: currentState + 1});
      }
   }   
   changeStatePrev() {
      const {currentState} = this.state;
      if(currentState === 0 ) {
         this.setState({currentState: data.length - 1})
      } else {
         this.setState({currentState: currentState - 1});
      }
   }

   resetState() {
      this.setState({currentState: 0});
   }

   render() {
      const {currentState} = this.state;
      return(
         <div className = "StateHandler">
            <div className="info">
               <DisplayList 
               currentState={currentState}
               resetState={this.resetState}/>
            </div>
            <div className="button">
               <Nav
               changeStateNext={this.changeStateNext}
               changeStatePrev={this.changeStatePrev}/>
            </div>
         </div>
      )
   }
}

export default Event;