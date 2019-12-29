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
        allFeatures:[],
        allFeaturesDisplay:[],
        allFeaturesValues:[],
        divs:[],
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
            Pricing: <Pricing returnType={"Pricing"} handleFeatureSubmit={(a,b) => this.handleFeatureSubmit(a,b)} feature={this.state.allFeatures.length}  />
            // Pricing: <Pricing handleFeatureSubmit={(a,b) => this.handleFeatureSubmit(a,b)} feature={"feature1"}  />
        };
        this.CreateFeatureOption = this.CreateFeatureOption.bind(this);
        this.CreateFeature = this.CreateFeature.bind(this);
        this.handleMainSubmit = this.handleMainSubmit.bind(this);

    }


    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    
    updateCache(client, { data }) {
        client.writeData({
        data: { site: data.makeBusiness }
        });
    }  

    handleFeatureSubmit(feature,data){
        let newFeature = Object.assign({}, this.state.allFeaturesValues[feature])
        let oldFeature = Object.assign({}, this.state.allFeaturesValues[feature])
        let dupFeature = [...this.state.allFeaturesValues]
        debugger
        let all = { co: this.state.divs[feature].props.returnType, form: this.state.divs[feature], return: data, num: feature}
        dupFeature.splice(feature, 1, all);

        newFeature.return = data
        this.setState({ allFeaturesValues: dupFeature })
        alert(`OLD:${JSON.stringify(oldFeature.return)} vs NEW:${JSON.stringify(newFeature.return)} `);
    }







// ////////////////////////////////////////////////////////////

    CreateFeatureOption(){
        this.setState(state => {
            const listOfAllFeatures = state.allFeatures.concat(this.CreateFeature());
            return {
                allFeatures: listOfAllFeatures
            };
        })
    }







// ////////////////////////////////////////////////////////////


    CreateFeature(){
        let all = this.state.allFeatures.length
        this.setState( state =>  {
        const list = state.allFeaturesValues.concat({ [all]:{co:"",form:"",return:"",num:all}});
        return {
            allFeaturesValues: list
        };
        })

        debugger

        return (
            <div
                key={`Feature${all}`}
                onSubmit={e => { e.preventDefault(); }}
                className="FeatureDiv">
                <select
                    className="new-site-data FeatureNum"
                    onChange={this.updateFeature(`feature${all}`)}>
                    <option defaultValue>{`Feature ${all}`} </option>
                    <option value="Order">Order</option>
                    <option value="Booking">Booking</option>
                    <option value="Three Pic Slider">Three Pic</option>
                    <option value="Pricing">Pricing</option>
                </select>


            </div>
        )
    }






// ////////////////////////////////////////////////////////////
    updateFeature(field) {
        return (e) => {
            let aa = { co: e.target.value, form: this.allFeatures[e.target.value] } 
            this.setState(state => {
                const listOfAllFeatures = state.allFeaturesDisplay.concat(aa.form);
                const listOfAlldivs = state.divs.concat(aa.form);
                debugger
                return {
                    allFeaturesDisplay: listOfAllFeatures, divs: listOfAlldivs
                };
                }
            );
        }
    }


    handleMainSubmit(){
        return this.state.allFeaturesValues.map(feature => {
            debugger
           return JSON.stringify({ [feature.co]: feature.return })
        })
    }





    render() {
        debugger
        let diplay = this.state.allFeatures.map((d,i) => {
                debugger
                let a =(
                    <div id={`featureDiv${i}`} className="FeatureDynamic">
                        <h1> {`Feature${i}`} </h1>
                        {this.state.divs[i]}
                    </div>
                )
                return(
                    <div>
                        {d}
                        {a}
                    </div>
                )
            })

        return (
            <Mutation
                mutation={CREATE_BUSINESS}
                update={(cache, data) => this.updateCache(cache, data)}
                onCompleted={(cache, data) => {}}
            >
                {(makeBusiness, { loading, error,data }) => {
                    if(error) {
                        return (<div>{error.networkError.message}</div>)
                    }
                    return (                
                        <div className="format-make-site">
                            <form onSubmit={e => {
                                e.preventDefault();
                                let endFeatures = this.handleMainSubmit()
                                debugger
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
                                        features: endFeatures,
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
                                    <select 
                                        className="new-site-data"
                                        value={this.state.businessData}
                                        onChange={this.update("businessData")}>
                                        <option defaultValue>businessData</option>
                                        <option value="About me">About me</option>
                                    </select>
                                </div>

                                <button className="cr-btt"  type="submit">Create Site</button>

                            </div>
                        </form>
                            {/* rfq  Needs to be dinamic do a quirey */}
                            {/* THIS IS THE START OF THE FEATURES */}
                            <div>
                                {diplay}
                            </div>
                            {/* THIS IS THE END OF THE FEATURES */}

                            <button onClick={e => this.CreateFeatureOption()}>Add More Feature Option</button>

                        <div className="fake-bit-div">
                            <button
                            onClick={ e => {
                                document.getElementsByClassName("cr-btt")[0].click()
                            }
                            } type="submit">Create Site</button>    
                        </div>

                    </div>
                )}}
            </Mutation>
        );
    }
}

export default withRouter(CreateBusiness);
