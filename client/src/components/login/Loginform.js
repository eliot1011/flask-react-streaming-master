import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button, FormGroup, Input} from "reactstrap";
import axios from 'axios'
import Swal from 'sweetalert2';


class Loginform extends React.Component {


    state = {
        username: '',
        password: ''
    }


    handleChangeusername = (e) => {
        this.setState({
            username: e.target.value
        });
    };


    handleChangepassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // const user = {
        //     email: this.state.email,
        //     password: this.state.password
        //   }
          console.log(this.state.username);
          return axios
      .post('/login', {
        "username": this.state.username,
        "password": this.state.password
      })
      .then(response => {
        // localStorage.setItem('usertoken', response.data)
        return response.data
      }).then(res=>{
          if(!res.error){
              this.props.history.push('/webcam')
          }
      })
      .catch(err => {
        console.log(err)

        console.log(this.state.username,this.state.password)
        Swal.fire({
        title: 'Incorrect Username or Password !',
        text: 'Please check your username or password',
        icon: 'warning',
        confirmButtonText: 'Re-enter',
        })
    })
    };

    render() {
        return(
            <div className="app-content">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label>Username</label>
                        <input type="text" placeholder="Username" onChange={this.handleChangeusername} required />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={this.handleChangepassword}  required />
                    </FormGroup>
                    <br />
                    <button type="submit" className="btn1">Login</button>
                </form>
                <p><br /><br /><br />Don't have an account yet?  <Link to="/register">Sign up</Link> </p><br /><br />
                <Link to="/"><button className="btn2"> ← </button></Link> 


            </div>
        )
    }
}
export default withRouter(Loginform);

