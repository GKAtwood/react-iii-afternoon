import React, {Component} from 'react';
import data from './Data';

class DisplayList extends Component {
   constructor() {
      super();

      this.state = {
         dataArray: data
      };
   }

   delete 

   render() {
      const {dataArray} = this.state;
      return(
         <div className = "DisplayList">
            <div id = "indexNumber">
               <h2>{this.props.currentState + 1} / {dataArray.length}</h2>     
            </div>
            <div id = "content">
               <h2><b>{dataArray[this.props.currentState].name.first} {dataArray[this.props.currentState].name.last}</b></h2>
               <h3><b>From: </b>{dataArray[this.props.currentState].city}, {dataArray[this.props.currentState].country} <br/>
               <b>Job Title: </b>{dataArray[this.props.currentState].title} <br/>
               <b>Employer: </b>{dataArray[this.props.currentState].employer} <br/> <br/>
               <b>Favorite Movies:</b>
                  <ol>{dataArray[this.props.currentState].favoriteMovies ? dataArray[this.props.currentState].favoriteMovies.map((element, index) => {
                     return <li>{element}</li>
                  }) : `No favorite movies to display.`}
                  </ol>
               </h3>
            </div>
         </div>
      )
   }
}

export default DisplayList;