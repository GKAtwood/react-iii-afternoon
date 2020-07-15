import React, {Component} from 'react'

import Data from './Data'
import Footer from './Footer'


 class Body extends Component {

     constructor(props) {
        super(props) 

        this.state = {
            employeeNumber: 1,
            totalEmployees: 25,
            counter: 0
        }
    }
    nextEmpolyee = () =>{

        if(this.state.counter < 24) {
            let updatedCount = this.state.counter + 1
            let updatedEmployeeNumber = this.state.employeeNumber + 1
            this.setState({
            counter: updatedCount,
            employeeNumber: updatedEmployeeNumber,
            })
        }else {
            this.setState({
                counter: 0,
                employeeNumber: 1
            })
        }
        
      }    

      previousEmpolyee = () =>{

        if(this.state.counter > 0) {
            let updatedCount = this.state.counter - 1
            let updatedEmployeeNumber = this.state.employeeNumber - 1
            this.setState({
            counter: updatedCount,
            employeeNumber: updatedEmployeeNumber,
            })
        }else {
            this.setState({
                counter: 24,
                employeeNumber: 25
            })
        }
        
      } 

      dataLength = (num) => {
          this.setState({
              totalEmployees: num
          })
      }

    render(){
        return(
            <div class="Body">

                <header id='counterBox' >
               <p id="employeeCounter">{`${this.state.employeeNumber}/${this.state.totalEmployees}`}</p>

                </header>
              
                    {/* <Data dataLength={this.dataLength} counter={this.state.counter} />
                  <Footer next={this.nextEmpolyee} prev={this.previousEmpolyee} /> */}
 
               

            </div>
        )
    }


   
}

export default Body