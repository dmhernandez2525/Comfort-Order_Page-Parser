import React from "react";

class Cart extends React.Component {
  constructor(props){
    super(props)
      this.state = {
          
      }
  }

  render(){

    return(
    <div id="cart" className="cart" onClick={() => console.log("HELLO BB FROM CART")}>
      <ul id="top-menu" className="cart-nav cart-right">
        
      </ul>                            
    </div>
    )
  }
}

export default Cart
