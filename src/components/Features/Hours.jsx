import React from "react";

class Hours extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
      this.data = this.props.data
  }
// EXAMPLE INPUT
//   data:{
//      Monday:{from:"10am",to:"10pm"},
//      Tuesday:{from:"10am",to:"10pm"},
//      Wednesday:{from:"10am",to:"10pm"},
//      Thursday:{from:"10am",to:"10pm"},
//      Friday:{from:"10am",to:"10pm"},
//      Saturday:{from:"10am",to:"10pm"},
//      Sunday:{from:"10am",to:"10pm"}
//   }

  render(){
    let display = Object.keys(this.data).map((day) =>{
        let currentDay = this.data[day];
        return <li key={day}>{`${day}:${currentDay.from}-${currentDay.to}`}</li>
    })
    return(
    <div> 
        {display}
    </div>
    )
  }
}

export default Hours

