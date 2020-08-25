import React, {Component} from 'react';

class Nav extends Component {
   render() {
      return(
         <div className="Navigation">
            <div id="left">
               <button id = "prev" onClick={this.props.changeStatePrev}>{"< Previous"}</button>
            </div>
            <div id="center">
               <button>Edit</button>
               <button>Delete</button>
               <button>New</button>
            </div>
            <div id="right">
               <button id = "next" onClick={this.props.changeStateNext}>{"Next >"}</button>
            </div>
         </div>
      )
   }
}

export default Nav;