import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";

import Pricing from "../Features/CreateFeatures/MakePriceing";
import About from "../Features/CreateFeatures/MakeAbout";
import Hours from "../Features/CreateFeatures/MakeHours";
import ImageCarousel from "../Features/CreateFeatures/MakeImageCarousel";
import SpotlightGallery from "../Features/CreateFeatures/MakeSpotlightGallery";
import Team from "../Features/CreateFeatures/MakeTeam";
import Menu from "../Features/CreateFeatures/MakeMenu";

import "../css/master.css";
const { CREATE_BUSINESS } = Mutations;


class CreateBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Demo Site name",
            url: "Demo Site url",
            phoneNumber: "Demo Site phoneNumber",
            address: "Demo Site address",
            slogan: "Demo Site slogan",
            template: "",
            userId: "5dee13bb4613a10017103002",
            // this is the data that will be renderd on User Interface
            divs:[],
            message:"",
            allFeaturesId:[],
            
            allFeatures:[],
            // allFeaturesValues:[], rfq get rid of
        };


        this.updateCache = this.updateCache.bind(this) // not currently working 

        // used to let user link to new site and notifie that it was sucsefuly created 
        this.displayMessage = this.displayMessage.bind(this)

        // used by feature after it has sucsufuly made its mutation
        this.handleFeatureSubmit = this.handleFeatureSubmit.bind(this)

        this.updateFeature = this.updateFeature.bind(this)


        // Rember to update CreateFeature if you add more

        this.allFeatures = {
            Order:"a",
            Booking:"a",
            Pricing: <Pricing returnType={"Pricing"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            About: <About returnType={"About"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            Hours: <Hours returnType={"Hours"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            ImageCarousel: <ImageCarousel returnType={"ImageCarousel"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            SpotlightGallery: <SpotlightGallery returnType={"SpotlightGallery"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            Team: <Team returnType={"Team"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />,
            Menu: <Menu returnType={"Menu"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={this.state.allFeatures.length}  />
        };

        this.CreateFeatureOption = this.CreateFeatureOption.bind(this);
        this.CreateFeature = this.CreateFeature.bind(this);
    }


    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    
    updateCache(client, { data }) {
        this.displayMessage(data)
        client.writeData({
            // rfq make it so that on creation of a new site that it automaticaly adds it to the master account 
        data: { businesses: data.makeBusiness }
        });
    }  

    displayMessage(data) {
        alert(`Your New Site Is UP!!`)
        this.setState({ message: data.makeBusiness._id })
    }  

    handleFeatureSubmit(feature,data){
        let newFeature = Object.assign({}, this.state.allFeaturesId[feature])
        let oldFeature = Object.assign({}, this.state.allFeaturesId[feature])

        let dupFeatureId = [...this.state.allFeaturesId]

        dupFeatureId.push(data);
        newFeature.return = data

        this.setState({ allFeaturesId: dupFeatureId })
        alert(`OLD:${JSON.stringify(oldFeature.return)} vs NEW:${JSON.stringify(newFeature.return)} `);
    }

    CreateFeatureOption(){
        this.setState(state => {
            const listOfAllFeatures = state.allFeatures.concat(this.CreateFeature());
            return {allFeatures: listOfAllFeatures};
        })
    }

    CreateFeature(){
        // this is the current feature number that you are on
        // rfq min posable data
        let indexForFeature = this.state.allFeatures.length;

        this.allFeatures = {
            Order: "a",
            Booking: "a",
            Pricing: <Pricing key={`Feature${indexForFeature}Pricing` } returnType={"Pricing"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            About: <About key={`Feature${indexForFeature}About` } returnType={"About"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            Hours: <Hours key={`Feature${indexForFeature}Hours` } returnType={"Hours"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            ImageCarousel: <ImageCarousel key={`Feature${indexForFeature}ImageCarousel` } returnType={"ImageCarousel"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            SpotlightGallery: <SpotlightGallery key={`Feature${indexForFeature}SpotlightGallery` } returnType={"SpotlightGallery"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            Team: <Team key={`Feature${indexForFeature}Team` } returnType={"Team"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />,
            Menu: <Menu key={`Feature${indexForFeature}Menu` } returnType={"Menu"} handleFeatureSubmit={(a, b) => this.handleFeatureSubmit(a, b)} feature={indexForFeature} />
        };



        // this.setState( state =>  {
        //     const list = state.allFeaturesValues.concat({ [all]:{co:"",form:"",return:"",num:all}});
        //     return {allFeaturesValues: list};
        // });

        return (
            <div
                key={`Feature${indexForFeature}`}
                onSubmit={e => { e.preventDefault(); }}
                className="FeatureDiv"
            >
                <select
                    className="new-site-data FeatureNum"
                    onChange={this.updateFeature(`feature${indexForFeature}`, indexForFeature)}>
                    <option defaultValue>{`Feature ${indexForFeature}`} </option>
                    <option value="About">About</option>
                    <option value="ImageCarousel">ImageCarousel</option>
                    <option value="SpotlightGallery">SpotlightGallery</option>
                    <option value="Team">Team</option>
                    <option value="Pricing">Pricing</option>
                    <option value="Menu">Menu</option>
                    <option value="Hours">Hours</option>
                </select>

            </div>
        )
    }

    updateFeature(field,index) {
        return (e) => {
            let formatedFeature = { co: e.target.value, form: this.allFeatures[e.target.value] } 
            this.setState(state => {
                state.divs.splice(index, 1, formatedFeature.form);
                const listOfAlldivs = state.divs
                return {
                    divs: listOfAlldivs
                };
            });
        }
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
                        return (<div>{error}</div>)
                    }
                    return (                
                        <div className="format-make-site">
                            <form onSubmit={e => {
                                e.preventDefault();
                                makeBusiness({
                                    variables: {
                                        name: this.state.name,
                                        url: this.state.url,
                                        phoneNumber: this.state.phoneNumber,
                                        address: this.state.address,
                                        slogan: this.state.slogan,
                                        template: this.state.template,
                                        userId: this.state.userId,
                                        features: this.state.allFeaturesId
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
                                <input 
                                    className="new-site-data"
                                    onChange={this.update("userId")}
                                    value={this.state.userId}
                                    placeholder="userId"
                                />
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
