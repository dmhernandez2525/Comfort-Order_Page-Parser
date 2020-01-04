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
      debugger
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
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
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
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
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
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
//              },
//              instagram:{
//                  url:"https://www.instagram.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
//              },
//              linkedin:{
//                  url:"https://www.linkedin.com",
//                  icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
//              }
//          }
//         
//     }
// }

  render(){
    let display = Object.values(this.data).map(member =>{
        let socialLinks = Object.values(member.socialLinks).map((data,i) => {
            debugger
          return (
              <li key={`${member.name}:${i}`}>
                  <button className={"social-links"} onClick={e => this.socialOpen(data.url)} style={{ backgroundImage: `url(${data.icon})` }} ></button>
                </li>
          )
        })
        return(
            <div key={member.name}>
                <div className="member-pic" style={{ backgroundImage: `url(${member.pic})` }}>
                </div>
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