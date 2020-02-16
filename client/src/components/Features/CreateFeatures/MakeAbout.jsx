import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../../graphql/mutations";
import "../../css/MakeFeatures/MakeAbout.css"

const endpoint = "http://localhost:5000/upload";
const { CREATE_FEATURE } = Mutations;

class MakeAbout extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
        title:"",
        text:"",
        pic:"",
        description: "",
        selectedFile: null

    }
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.updatePic = this.updatePic.bind(this)
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


  updatePic() {
    return e => {
      debugger
      e.persist()
      e.preventDefault();
      this.setState({
        description: e.target.value,
        selectedFile: e.target.files[0]
      });
    }
  }

  handleUpload = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile, this.state.description);

    axios
      .post(endpoint, data)
      .then((imageUrl) => {
        alert(imageUrl);
      })
      .catch(error => {
        alert("Oops some error happened, please try again");
      });
  };


// EXAMPLE INPUT
//   data:{
//       about:{
//           title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt",
//           text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra elit a vehicula viverra. Pellentesque scelerisque nisi eu dui vehicula, ut tristique dui accumsan. Nullam posuere bibendum condimentum. Aenean tempor arcu quis velit ultrices molestie. Etiam dignissim ex id arcu elementum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id dictum velit, ut varius nisi. Nullam lobortis eget lectus sed blandit. Phasellus ultrices felis ac sollicitudin mollis. Phasellus consectetur, sapien nec gravida vehicula, enim metus faucibus sapien, quis gravida libero libero id velit. Fusce augue mi, vestibulum sed dapibus non, faucibus sit amet urna. Praesent bibendum felis condimentum sem accumsan, id maximus velit egestas. Proin ut erat ligula. Etiam eu sollicitudin libero.",
//           pic: "https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48"
//       }
//   }

  render(){
    return(
      <Mutation
        mutation={CREATE_FEATURE}
          update={(cache, data) => {
            this.handleSubmit(data.data.makeFeature._id)
          }}
        onCompleted={(cache, data) => { 
          // this.handleSubmit(cache.makeFeature._id)
        }}
      >
          {(CreateFeature, { loading, error,data }) => {
              if(error) {
                  return (<div>{error.networkError.message}</div>)
              }
              return (                
                  <div className="format-make-site">
                      <form onSubmit={e => {
                          e.preventDefault();
                          let data = JSON.stringify(this.state);
                          let order = this.props.feature.toString();
                          CreateFeature({
                              variables: {
                                  cssName: "1",
                                  name: "About",
                                  data: data,
                                  order: order
                              }
                          });
                      }}>

        <h1> About Feature </h1>
            <div className="days">

                    <input className="about-data"
                        onChange={this.update("title")}
                        value={this.state.title}
                        placeholder="title"
                    />   
                    <textarea className="about-data"
                        onChange={this.update("text")}
                        value={this.state.text}
                        placeholder="text"
                    />                    
                    {/* rfq this needs to use aws upload */}
                    <input className="about-data" 
                        type="file" 
                        onChange={this.updatePic("pic")}
                        value={this.state.pic} 
                    />
                    
                    {/* 
                    <input className="about-data"
                        onChange={this.update("pic")}
                        value={this.state.pic}
                        placeholder="pic"
                    />                     */}

            </div>
          <input type="submit"/>
        </form>
    </div>

    
                )}}
            </Mutation>
    )
  }
}

export default MakeAbout



