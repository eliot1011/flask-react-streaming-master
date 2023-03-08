import React from "react";
import loginImg from "../../login.png";
import Navbar from "../Navbar";
import Loginform from "./Loginform.js"
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from "reactstrap";

export class Login extends React.Component {


  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>

        <div className="row">
          <div className="App">

            <div className="login">
              <div className="container">

                <div className="header">
                  Login
                </div>

                <div className="content">

                  <div className="image">
                    <img src={loginImg} />
                  </div>

                  <Loginform />

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
