import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../../graphql/mutations";
const { CREATE_FEATURE } = Mutations;

class MakeHours extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
        Monday:["",""],
        Tuesday:["",""],
        Wednesday:["",""],
        Thursday:["",""],
        Friday:["",""],
        Saturday:["",""],
        Sunday:["",""]

    }
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(){
    let returnState = {}
      Object.keys(this.state).forEach((day) => { 
          let data = this.state[day]
          returnState[day] = {from:data[0],to:data[0]}
    })
    return returnState
  }

  update(day,field) {
    return e => {
      e.persist()
        this.setState( state => { 
        let newState = [...state[day]]
        newState[field] =  e.target.value
        return{
            [day]:newState
        }
      })}
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
    return(
      <Mutation
        mutation={CREATE_FEATURE}
          update={(cache, data) => {
            this.handleFeatureSubmit(this.props.feature, data.data.makeFeature._id)
          }}
        onCompleted={(cache, data) => {}}
      >
          {(CreateFeature, { loading, error,data }) => {
              if(error) {return (<div>{error.networkError.message}</div>)}
              return (                
                <div className="hours-div" >
                  <h1> Hours Feature </h1>
                    <form className="hours-submit"
                      onSubmit={e => {
                        e.preventDefault();
                        let data = this.handleSubmit()
                        data = JSON.stringify(data)
                        let order = this.props.feature.toString();
                        CreateFeature({
                            variables: {
                              cssName: "1",
                              name: "Hours",
                              data: data,
                              order: order
                            }
                        });
                    }}>

                      <div className="days">
                          <div className="day-data-holder">

                              <div>
                                  <h1>Monday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Monday", 0)}
                                  value={this.state.Monday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Monday", 1)}
                                  value={this.state.Monday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Tuesday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Tuesday", 0)}
                                  value={this.state.Tuesday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Tuesday", 1)}
                                  value={this.state.Tuesday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Wednesday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Wednesday", 0)}
                                  value={this.state.Wednesday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Wednesday", 1)}
                                  value={this.state.Wednesday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Thursday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Thursday", 0)}
                                  value={this.state.Thursday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Thursday", 1)}
                                  value={this.state.Thursday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Friday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Friday", 0)}
                                  value={this.state.Friday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Friday", 1)}
                                  value={this.state.Friday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Saturday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Saturday", 0)}
                                  value={this.state.Saturday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Saturday", 1)}
                                  value={this.state.Saturday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                          <div className="day-data-holder">

                              <div>
                                  <h1>Sunday</h1>
                              </div>

                              <input className="day-data"
                                  onChange={this.update("Sunday", 0)}
                                  value={this.state.Sunday[0]}
                                  placeholder="From"
                              />   
                              <input className="day-data"
                                  onChange={this.update("Sunday", 1)}
                                  value={this.state.Sunday[1]}
                                  placeholder="To"
                              />                    
                          </div>

                      </div>
                    <input type="submit"/>

                  </form>
                </div>
              )
          }}
      </Mutation>
    )
  }
}

export default MakeHours



