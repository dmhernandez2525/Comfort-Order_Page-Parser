import React from "react";
import {cartItemsSetter} from "../apollo_hooks_hoc"


class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dummyInfo: [1,2,3,4,5,6,7,8]
    }
  }


  

  render(){
    return(
      <div className="container">
        <ul>
          {this.state.dummyInfo.map((ele, i) => (
            <li key={i} onClick={() => this.props.addCartItems(ele)}>
              {ele}
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default cartItemsSetter(Menu)
