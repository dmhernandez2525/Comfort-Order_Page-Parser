import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="footer-area">
          <div className="footer-links">
            <a href="#">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="#">
              <span className="fa fa-google-plus"></span>
            </a>
            <a href="#">
              <span className="fa fa-linkedin"></span>
            </a>
            <a href="#">
              <span className="fa fa-youtube"></span>
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              Designed & Published by{" "}
              <a href="http://www.comfortorder.com/" target="_blank">
                Comfort Order
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
