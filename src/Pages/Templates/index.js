import React from "react";
import { withRouter } from "react-router-dom";
import four0four from "../Four0Four";

// START OF ALL THE TEMPLATES
import Restaurant from "./Restaurant";
// END OF ALL THE TEMPLATES

// START OF ALL THE FEATURES
// import Modal from "../Features/modal";
// import Pricing, from "../Features/Pricing";
// import About, from "../Features/About";
// import Hours, from "../Features/Hours";
// import ImageCarousel, from "../Features/ImageCarousel";
// import SpotlightGallery, from "../Features/SpotlightGallery";
// import Team, from "../Features/Team";
// import Menu, from "../Features/menu";
import // Pricing,
// About,
// Hours,
// ImageCarousel,
// SpotlightGallery,
// Team,
// Menu,
"@comfort-order/dry";
// END OF ALL THE FEATURES

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.formatFeatures = this.formatFeatures.bind(this);
    this.makeFeature = this.makeFeature.bind(this);
    this.features = this.formatFeatures();
  }

  makeFeature(feature, data) {
    switch (feature) {
      case "Pricing":
        return <div></div>; //<Pricing data={data} />;
      case "About":
        return <div></div>; //<About data={data} />;
      case "Hours":
        return <div></div>; //<Hours data={data} />;
      case "ImageCarousel":
        return <div></div>; //<ImageCarousel data={data} />;
      case "SpotlightGallery":
        return <div></div>; //<SpotlightGallery data={data} />;
      case "Team":
        return <div></div>; //<Team data={data} />;
      case "Menu":
        return <div></div>; //<Menu data={data} />;
      default:
        return <div></div>; //<div></div>;
    }
  }

  formatFeatures() {
    let fe = {};
    Object.keys(this.props.features).map((feature) => {
      let key = Object.keys(this.props.features[feature]);
      let value = Object.values(this.props.features[feature]);
      fe[feature] = {
        feature: this.makeFeature(key[0], value[0]),
        type: key[0],
      };
    });
    return fe;
  }

  render() {
    if (this.props.template === "Restaurant") {
      return (
        <Restaurant
          features={this.features}
          businessData={this.props.businessData}
        />
      );
    }
    return <four0four />;
  }
}

export default withRouter(Index);
