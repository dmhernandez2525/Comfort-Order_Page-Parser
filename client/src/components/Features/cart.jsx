import React from "react";
import {cartItemsGetter} from "../apollo_hooks_hoc";

class Cart extends React.Component {
  constructor(props){
    super(props)
      this.state = {
          
      }
  }

  render(){
    return(
    <div id="cart" className="cart" onClick={() => console.log("HELLO BB FROM CART")}>
      <h1>WHAT IT DOOOOOOO BB </h1>
      <h1>-Cart</h1>
      <ul id="top-menu" className="cart-nav cart-right">
        {this.props.cartItems.map((ele, i ) => (
          <li key={i} >
            {ele}
          </li>
        ))}
      </ul>                            
    </div>
    )
  }
}

export default cartItemsGetter(Cart)
