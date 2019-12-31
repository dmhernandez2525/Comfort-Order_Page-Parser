import React from "react"


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
          {this.state.dummyInfo.map((ele) => {
            <li onClick={() => console.log("add to cart cache")}>
              {/* {ele} */}
            </li>
          })}
        </ul>
      </div>
    )
  }

}

export default Menu
