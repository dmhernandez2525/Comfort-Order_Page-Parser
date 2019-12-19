import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
import Pricing from "../Features/MakePriceing";
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
        feature1: {co:"",form:""},
        feature2: "",
        feature3: "",
        feature4: "",
        feature5: "",
        businessData: "",
        };
        this.tete = React.createRef();
        this.updateCache = this.updateCache.bind(this)
        this.handleFeatureSubmit = this.handleFeatureSubmit.bind(this)
        this.updateFeature = this.updateFeature.bind(this)
        this.allFeatures = {
            Order:"a",
            Booking:"a",
            ThreePicSlider:"a",
            Pricing:<Pricing handleFeatureSubmit={ this.handleFeatureSubmit } ref={this.tete} />
        }

    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    
    updateCache(client, { data }) {
        client.writeData({
        data: { site: data.makeBusiness }
        });
    }  

    handleFeatureSubmit(data){
        // this.tete.current.pricingBoxCreate()
        debugger
    }
    updateFeature(field) {
        return (e) => {
            let aa = { co: e.target.value, form: this.allFeatures[e.target.value] } 
            debugger
            this.setState(state => {
                let a = aa
                let newField = field;
                debugger
                return{
                    [newField]:a
                }
                }
            );
        }
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
                                    features: [this.state.feature1, this.state.feature2, this.state.feature3, this.state.feature4, this.state.feature5],
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
                                    value={this.state.feature1.co}
                                    onChange={this.updateFeature("feature1")}>
                                    <option defaultValue>Feature One</option>
                                    <option value="Order">Order</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Three Pic Slider">Three Pic</option>
                                    <option value="Pricing">Pricing</option>
                                </select>


                                <select 
                                    className="new-site-data"
                                    value={this.state.feature2}
                                    onChange={this.update("feature2")}>
                                    <option defaultValue>Feature Two</option>
                                    <option value="Order">Order</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Three Pic Slider">Three Pic</option>
                                </select>

                                <select 
                                    className="new-site-data"
                                    value={this.state.feature3}
                                    onChange={this.update("feature3")}>
                                    <option defaultValue>Feature Three</option>
                                    <option value="Order">Order</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Three Pic Slider">Three Pic</option>
                                </select>

                                <select 
                                    className="new-site-data"
                                    value={this.state.feature4}
                                    onChange={this.update("feature4")}>
                                    <option defaultValue>Feature Four</option>
                                    <option value="Order">Order</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Three Pic Slider">Three Pic</option>
                                </select>

                                <select 
                                    className="new-site-data"
                                    value={this.state.feature5}
                                    onChange={this.update("feature5")}>
                                    <option defaultValue>Feature Five</option>
                                    <option value="Order">Order</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Three Pic Slider">Three Pic</option>
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
                        <div>
                            {this.state.feature1.form}
                            {/* <button onClick={e => this.handleFeatureSubmit(this.state.feature1.form)}>Add More Pricing options</button> */}

                        </div>
                </div>
            )}}
        </Mutation>
        );
    }
}
export default withRouter(CreateBusiness);
