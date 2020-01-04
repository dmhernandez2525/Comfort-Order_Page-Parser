import React from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import  gql  from 'graphql-tag'

const MODAL = gql`
{
  modalBool @client
}
`
const CART = gql`
{
  cartItems @client
}
`

export function modalHOC(Component) {
  return function WrappedComponent(props) {
    const client = useApolloClient();
    let modalQueryRead = client.readQuery({ query: MODAL })
    function setModalCache(modalBool, cb) {
      client.writeData({ data: { modalBool } })
      if(cb) cb(modalBool)
    }
    return <Component {...props} modalBool={modalQueryRead.modalBool} setModalCache={setModalCache} />
  }
}

export function cartItemsGetter(Component) {
  return function WrappedComponent(props) {
    const client = useApolloClient();
    let cartQueryRead = client.readQuery({ query: CART })
    return <Component {...props} cartItems={cartQueryRead.cartItems}/>
  }
}

export function cartItemsSetter(Component) {
  return function WrappedComponent(props) {
    const client = useApolloClient();
    let cartQueryRead = client.readQuery({ query: CART })
    function addCartItems(item) {
      cartQueryRead.cartItems.push(item)
      client.writeData({ data: { cartItems: cartQueryRead.cartItems } })
    }

    return <Component {...props} cartItems={cartQueryRead.cartItems} addCartItems={addCartItems}/>
  }
}
