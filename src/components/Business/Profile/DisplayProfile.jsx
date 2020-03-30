import React from "react";
import { Link } from "react-router-dom"

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <h1>Profile</h1>
                <Link to="/businessLogin"> Back </Link>

            </div>
        )

    }
}


export default Profile 