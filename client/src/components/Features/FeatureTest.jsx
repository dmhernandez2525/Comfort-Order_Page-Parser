import React from "react";
import TestFe from "./menu" // Just change this route

class Test extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
     // change data to the test data that you want   
      let data = {
        category1: {
            image:"Free",
            price: 0,
            description: "This is the tatsy items description"
        },
        category2:{},
        category3:{},
        category4:{},
    }

    return(
    <div > 
        <TestFe data={data}/>                          
    </div>
    )
  }
}

export default Test

