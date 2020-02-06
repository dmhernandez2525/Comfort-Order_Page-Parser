import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";

import Pricing from "../Features/CreateFeatures/MakePriceing";
import About from "../Features/CreateFeatures/MakeAbout";
import Hours from "../Features/CreateFeatures/MakeHours";
import ImageCarousel from "../Features/CreateFeatures/MakeImageCarousel";
import SpotlightGallery from "../Features/CreateFeatures/MakeSpotlightGallery";
import Team from "../Features/CreateFeatures/MakeTeam";
import Menu from "../Features/CreateFeatures/MakeMenu";

import "../css/master.css";
const { CREATE_BUSINESS } = Mutations;
// const { FETCH_BUSINESS } = Queries; rfq for editing


class CreateBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Demo Site name",
            map: "Demo Site map",
            url: "Demo Site url",
            phoneNumber: "Demo Site phoneNumber",
            address: "Demo Site address",
            slogan: "Demo Site slogan",
            hours: "Demo Site hours",
            about: "Demo Site about",
            template: "",
            userId: "5dee13bb4613a10017103002",
            allFeatures:[],
            allFeaturesDisplay:[],
            allFeaturesValues:[],
            divs:[],
            businessData: "About me",
            message:""
        };
        this.tete = React.createRef();
        this.updateCache = this.updateCache.bind(this)
        this.displayMessage = this.displayMessage.bind(this)
        this.handleFeatureSubmit = this.handleFeatureSubmit.bind(this)
        this.updateFeature = this.updateFeature.bind(this)
        // Rember to update CreateFeature if you add more
        this.allFeatures = {
            Order:"a",
            Booking:"a",
            Pricing: <Pricing returnType={"Pricing"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            About: <About returnType={"About"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            Hours: <Hours returnType={"Hours"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            ImageCarousel: <ImageCarousel returnType={"ImageCarousel"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            SpotlightGallery: <SpotlightGallery returnType={"SpotlightGallery"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            Team: <Team returnType={"Team"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />,
            Menu: <Menu returnType={"Menu"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeaturesValues.length}  />
        };
        this.CreateFeatureOption = this.CreateFeatureOption.bind(this);
        this.CreateFeature = this.CreateFeature.bind(this);
        this.handleMainSubmit = this.handleMainSubmit.bind(this);

    }


    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    
    updateCache(client, { data }) {
        this.displayMessage(data)
        client.writeData({
        data: { site: data.makeBusiness }
        });
    }  

    displayMessage(data) {
        alert(`Your New Site Is UP!!`)
        this.setState({ message: data.makeBusiness._id })
    }  

    handleFeatureSubmit(feature,data){
        let newFeature = Object.assign({}, this.state.allFeaturesValues[feature])
        let oldFeature = Object.assign({}, this.state.allFeaturesValues[feature])

        let dupFeature = [...this.state.allFeaturesValues]

        let all = { co: this.state.divs[feature].props.returnType, form: this.state.divs[feature], return: data, num: feature}
        dupFeature.splice(feature, 1, all);

        newFeature.return = data
        this.setState({ allFeaturesValues: dupFeature })
        alert(`OLD:${JSON.stringify(oldFeature.return)} vs NEW:${JSON.stringify(newFeature.return)} `);
    }

    CreateFeatureOption(){
        this.setState(state => {
            const listOfAllFeatures = state.allFeatures.concat(this.CreateFeature());
            return {allFeatures: listOfAllFeatures};
        })
    }

    CreateFeature(){
        let all = this.state.allFeatures.length;

        this.allFeatures = {
            Order: "a",
            Booking: "a",
            Pricing: <Pricing key={`Feature${all}Pricing` } returnType={"Pricing"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            About: <About key={`Feature${all}About` } returnType={"About"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            Hours: <Hours key={`Feature${all}Hours` } returnType={"Hours"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            ImageCarousel: <ImageCarousel key={`Feature${all}ImageCarousel` } returnType={"ImageCarousel"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            SpotlightGallery: <SpotlightGallery key={`Feature${all}SpotlightGallery` } returnType={"SpotlightGallery"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            Team: <Team key={`Feature${all}Team` } returnType={"Team"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />,
            Menu: <Menu key={`Feature${all}Menu` } returnType={"Menu"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={all} />
        };



        this.setState( state =>  {
            const list = state.allFeaturesValues.concat({ [all]:{co:"",form:"",return:"",num:all}});
            return {allFeaturesValues: list};
        });

        return (
            <div
                key={`Feature${all}`}
                onSubmit={e => { e.preventDefault(); }}
                className="FeatureDiv"
            >
                <select
                    className="new-site-data FeatureNum"
                    onChange={this.updateFeature(`feature${all}`)}>
                    <option defaultValue>{`Feature ${all}`} </option>
                    <option value="Pricing">Pricing</option>
                    <option value="About">About</option>
                    <option value="Hours">Hours</option>
                    <option value="ImageCarousel">ImageCarousel</option>
                    <option value="SpotlightGallery">SpotlightGallery</option>
                    <option value="Team">Team</option>
                    <option value="Menu">Menu</option>
                </select>

            </div>
        )
    }

    updateFeature(field) {
        return (e) => {
            let aa = { co: e.target.value, form: this.allFeatures[e.target.value] } 
            this.setState(state => {
                const listOfAllFeatures = state.allFeaturesDisplay.concat(aa.form);
                const listOfAlldivs = state.divs.concat(aa.form);
                return {
                    allFeaturesDisplay: listOfAllFeatures,
                    divs: listOfAlldivs
                };
            });
        }
    }


    handleMainSubmit(){
        return this.state.allFeaturesValues.map(feature => {
           return JSON.stringify({ [feature.co]: feature.return })
        })
    }

    render() {
        let messageSite;
        if(this.state.message !== ""){
            messageSite = (
                <div className="siteLink">
                    <a href={`http://localhost:3000/#/site/${this.state.message}`} target="_blank">Visit Your new Site</a> 
                </div>
            )
        }

        let diplay = this.state.allFeatures.map((featureSelector,i) => {
                let featureInput =(
                    <div key={`featureDiv${i}`} id={`featureDiv${i}`} className="FeatureDynamic">
                        <h1> {`Feature${i}`} </h1>
                        {this.state.divs[i]}
                    </div>
                )
                return(
                    <div key={`featureDiv${i}`} className="featureWrap" >
                        {featureSelector}
                        {featureInput}
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

                        <div className="add-fe-button">
                            <button onClick={e => this.CreateFeatureOption()}>Add Feature</button> 
                        </div>

                        <div className="fake-bit-div">
                            <button
                                className="img-back-button"
                            onClick={ e => {
                                document.getElementsByClassName("cr-btt")[0].click()
                            }
                            } type="submit">Create Site</button>    
                        </div>
                        {messageSite}

                    </div>
                )}}
            </Mutation>
        );
    }
}

export default withRouter(CreateBusiness);
