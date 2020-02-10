import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../../graphql/mutations";
const { CREATE_FEATURE } = Mutations;

class Template extends React.Component  {
  constructor(props){
    super(props)
    this.state = {}
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(data){
    this.handleFeatureSubmit(this.props.feature, data)
  }

  update(field) {
    return e => {
      e.persist()
        this.setState( state => { 
        return{
            [field]:e.target.value
        }
      })}
  }

// EXAMPLE INPUT
//   data:{
//   }

  render(){
    // return(
    //   <Mutation
    //     mutation={CREATE_FEATURE}
    //       update={(cache, data) => {
    //         this.handleSubmit(data.data.makeFeature._id)
    //       }}
    //     onCompleted={(cache, data) => {}}
    //   >
    //       {(CreateFeature, { loading, error,data }) => {
    //           if(error) {return (<div>{error.networkError.message}</div>)}
    //           return (                
    //               <div className="format-make-site">
    //                   <form onSubmit={e => {
    //                       e.preventDefault();
    //                       CreateFeature({
    //                           variables: {
    //                               data: data,
    //                               data: data,
    //                               data: data,
    //                               data: data,
    //                           }
    //                       });
    //                   }}>

    //                       <h1> Template Feature </h1>
    //                       <div className="">

    //                               <input className=""
    //                                   onChange={this.update("")}
    //                                   value={this.state}
    //                                   placeholder=""
    //                               />   
    //                               <textarea className=""
    //                                   onChange={this.update("")}
    //                                   value={this.state}
    //                                   placeholder=""
    //                               />                    
    //                               <input className=""
    //                                   onChange={this.update("")}
    //                                   value={this.state}
    //                                   placeholder=""
    //                               />                    

    //                       </div>
    //                       <input type="submit"/>
    //                 </form>
    //             </div>
    //           )
    //       }}
    //   </Mutation>
    // )

    
    
    
    
    return(
      <Mutation
        mutation={CREATE_FEATURE}
          update={(cache, data) => {
            this.handleSubmit(data.data.makeFeature._id)
          }}
        onCompleted={(cache, data) => {}}
      >
          {(CreateFeature, { loading, error,data }) => {
              if(error) {return (<div>{error.networkError.message}</div>)}
              return (                
                  <div className="format-make-site">
                      <form onSubmit={e => {
                          e.preventDefault();
                          CreateFeature({
                              variables: {
                                  data: data,
                                  data: data,
                                  data: data,
                                  data: data,
                              }
                          });
                      }}>

                    {/* PUT CODE HERE */}
                    
                    </form>
                </div>
              )
          }}
      </Mutation>
    )
  }
}

export default Template



