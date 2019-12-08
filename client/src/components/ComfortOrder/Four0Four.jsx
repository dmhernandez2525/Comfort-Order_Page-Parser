import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"



class Four0four extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h1>This page is down at the moment check back later. thanks!</h1>
                <Link to="/">Go to Main page</Link>
            </div>
        )
    }
}

export default withRouter(Four0four);