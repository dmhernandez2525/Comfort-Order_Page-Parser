import React from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import  gql  from 'graphql-tag'

const MODAL = gql`
{
  modalBool @client
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

