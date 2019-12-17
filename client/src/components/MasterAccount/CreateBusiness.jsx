import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
import "../css/master.css";
const { CREATE_BUSINESS } = Mutations;
const { FETCH_BUSINESS } = Queries;


class CreateBusiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
    name: "",
    map: "",
    url: "",
    phoneNumber: "",
    address: "",
    slogan: "",
    hours: "",
    about: "",
    template: "",
    userId: "",
    features: "",
    businessData: "",
    };
    this.updateCache = this.updateCache.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  updateCache(client, { data }) {
    
    client.writeData({
      data: { site: data.makeBusiness }
    });
  }  

  render() {
    return (
      <Mutation
        mutation={CREATE_BUSINESS}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={(cache, data) => {}}
      >
        {(makeBusiness, { loading, error,data }) => {
            if(error) return(<div>{error.networkError.message}</div>)
            return (                
                <div className="format-make-site">
                    <form onSubmit={e => {
                        e.preventDefault();
                        makeBusiness({
                            variables: {
                                name: this.state.name,
                                map: this.state.map,
                                url: this.state.url,
                                phoneNumber: this.state.phoneNumber,
                                address: this.state.address,
                                slogan: this.state.slogan,
                                hours: this.state.hours,
                                about: this.state.about,
                                template: this.state.template,
                                userId: this.state.userId,
                                features: [this.state.features],
                                businessData: [this.state.businessData],
                            }
                        });
                    }}>
                        <div className="create-business-site" >
                        <input className="new-site-data"
                            onChange={this.update("name")}
                            value={this.state.name}
                            placeholder="Name"
                        />
                        <input className="new-site-data"
                            onChange={this.update("map")}
                            value={this.state.map}
                            placeholder="map"
                        />
                        <input className="new-site-data"
                            onChange={this.update("url")}
                            value={this.state.url}
                            placeholder="url"
                        />
                        <input className="new-site-data"
                            type="tel"
                            onChange={this.update("phoneNumber")}
                            value={this.state.phoneNumber}
                            placeholder="phoneNumber"
                        />
                        <input className="new-site-data"
                            onChange={this.update("address")}
                            value={this.state.address}
                            placeholder="address"
                        />
                        <input className="new-site-data"
                            onChange={this.update("slogan")}
                            value={this.state.slogan}
                            placeholder="slogan"
                        />
                        {/* rfq days and hours */}
                        <input className="new-site-data"
                            onChange={this.update("hours")}
                            value={this.state.hours}
                            placeholder="hours"
                        />
                        <textarea className="new-site-data"
                            onChange={this.update("about")}
                            value={this.state.about}
                            placeholder="about"
                        />
                        <input className="new-site-data"
                            onChange={this.update("name")}
                            value={this.state.name}
                            placeholder="Name"
                        />
                        
                         <input 
                            className="new-site-data"
                            onChange={this.update("userId")}
                            value={this.state.userId}
                            placeholder="userId"
                        />
                        {/* rfq  Needs to be dinamic do a quirey */}
                        
                        <div className="new-site-data-div">
                            <select 
                                className="new-site-data"
                                value={this.state.template}
                                onChange={this.update("template")}>
                                <option defaultValue>template</option>
                                <option value="Restaurant">Restaurant</option>
                            </select>
                            {/* rfq  Needs to be dinamic do a quirey */}
                            
                            <select 
                                className="new-site-data"
                                value={this.state.features}
                                onChange={this.update("features")}>
                                <option defaultValue>features</option>
                                <option value="Order">Order</option>
                                <option value="Booking">Booking</option>
                            </select>

                            
                            <select 
                                className="new-site-data"
                                value={this.state.businessData}
                                onChange={this.update("businessData")}>
                                <option defaultValue>businessData</option>
                                <option value="About me">About me</option>
                            </select>
                        </div>
                        <button  type="submit">Create Site</button>
                    </div>
                </form>
            </div>
        )}}
      </Mutation>
    );
  }
}
export default withRouter(CreateBusiness);
