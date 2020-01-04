import React from "react";
import TestFe from "./Hours" // Just change this route

class Test extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
     // change data to the test data that you want   
    let data = {
      Monday:{from:"10am",to:"10pm"},
      Tuesday:{from:"10am",to:"10pm"},
      Wednesday:{from:"10am",to:"10pm"},
      Thursday:{from:"10am",to:"10pm"},
      Friday:{from:"10am",to:"10pm"},
      Saturday:{from:"10am",to:"10pm"},
      Sunday:{from:"10am",to:"10pm"}
    }


    return(
    <div > 
        <TestFe data={data}/>                          
    </div>
    )
  }
}

export default Test

