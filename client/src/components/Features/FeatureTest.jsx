import React from "react";
import TestFe from "./Team" // Just change this route

class Test extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
     // change data to the test data that you want   
    let data = {
        member1: {
            pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
            name: "Tom",
            about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
            socialLinks: {
                facebook:{
                    url:"https://www.facebook.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
                },
                instagram:{
                    url:"https://www.instagram.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
                },
                linkedin:{
                    url:"https://www.linkedin.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
                }
            },
        
        },
        member2: {
            pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
            name: "Bill",
            about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
            socialLinks: {
                facebook:{
                    url:"https://www.facebook.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
                },
                instagram:{
                    url:"https://www.instagram.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
                },
                linkedin:{
                    url:"https://www.linkedin.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
                }
            },
        },
        member3: {
            pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
            name: "Margret",
            about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
            socialLinks: {
                facebook:{
                    url:"https://www.facebook.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"
                },
                instagram:{
                    url:"https://www.instagram.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_24x24.png"
                },
                linkedin:{
                    url:"https://www.linkedin.com",
                    icon:"https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_24x24.png"
                }
            }
            
        }
    }


    return(
    <div > 
        <TestFe data={data}/>                          
    </div>
    )
  }
}

export default Test

