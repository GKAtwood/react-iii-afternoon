import React, {Component} from 'react';

class Heading extends Component {
   constructor () {
      super();

      this.state = {
         menu: ["Home"]
      };
   }

   render() {
      return(
         <div className="Heading">
            <h4>{this.state.menu.map((element, index) => {
               return <button onClick={null}>
                  {element}
               </button>
               
            })}</h4>
         </div>
      )
   }
}

export default Heading;