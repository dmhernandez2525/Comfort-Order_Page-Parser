import React from "react";
import { withRouter } from 'react-router-dom';
import Restaurant from "./Restaurant";
import four0four from '../ComfortOrder/Four0Four';


class Index extends React.Component {
  constructor(props){
    super(props)

  }
    render() {
      debugger
        if (this.props.template === "Restaurant"){
            return <Restaurant features={this.props.features} businessData={this.props.businessData}/>
        }
        return <four0four />
    }
}

export default withRouter(Index);