import React from "react";
import "../css/Features/Team.css"

class Team extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
      this.data = this.props.data
      this.socialOpen = this.socialOpen.bind(this)
  }
  socialOpen(url){
      window.open(url);
  }
// EXAMPLE INPUT
//   data:{
//     member1: {
//         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         name: "Tom",
//         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
//         socialLinks: {
//              facebook:{
//                  url:"https://www.facebook.com",
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//              }
//          },
//      
//     },
//     member2: {
//         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         name: "Bill",
//         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
//         socialLinks: {
//              facebook:{
//                  url:"https://www.facebook.com",
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//              }
//          },
//     },
//     member3: {
//         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         name: "Margret",
//         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
//         socialLinks: {
//              facebook:{
//                  url:"https://www.facebook.com",
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//              }
//          }
//         
//     }
// }

  render(){
    let links = { 
      facebook:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png",
      linkedin:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_32x32.png",
      twitter:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/twitter-icon_32x32.png",
      youtube:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/youtube-icon_32x32.png",
      instagram:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_32x32.png",
      skype:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/skype-icon_32x32.png",
      pinterest:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/pinterest-icon_32x32.png",
      reddit:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/reddit-icon_32x32.png",
      pr:"",
    }
    let display = Object.values(this.data).map(member =>{
        let socialLinks = Object.keys(member.socialLinks).map((social,i) => {
          let socialData = member.socialLinks[social]
          return (
              <li key={`${member.name}:${i}`}>
              <button className={"social-links"} onClick={e => this.socialOpen(socialData.url)} style={{ backgroundImage: `url(${links[social]})` }} ></button>
                </li>
          )
        })
        return(
            <div key={member.name}>
                <img src={member.pic} />
                <div>
                    <h1>{member.name}</h1>
                    <p>{member.about}</p>
                </div>
                <ul>
                    {socialLinks}
                </ul>
            </div>
        )
    })
    return(
    <div > 
        {display}
    </div>
    )
  }
}

export default Team

// https://www.exclaimer.com/email-signature-handbook/10078-social-media-icons-email-signatures