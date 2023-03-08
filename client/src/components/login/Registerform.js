import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button, FormGroup, Input} from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';


class Registerform extends React.Component {


    state = {
        username: '',
        email: '',
        password: ''
    }


    handleChangeusername = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    handleChangeemail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleChangepassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // const newUser = {
            
        //     username: this.state.username,
        //     password: this.state.password
        //   }
          console.log(this.state.username,this.state.password)
        //   register(newUser).then(res => {
        //     this.props.history.push(`/webcam`)
        //   })
        return axios
            .post('/register', {
                "username": this.state.username,
                "password": this.state.password
            })
            .then(response => {
                console.log('Registered')
                console.log(response.data)
                this.props.history.push('/login')

                Swal.fire({
                    title: 'Registration Successful',
                    text: 'Please Log in',
                    icon: 'success',
                    confirmButtonText: 'Login',
                    })
            }).catch(err => {
                console.log(err)
                Swal.fire({
                    title: 'Username or email already exists !',
                    text: 'Please try a different username',
                    icon: 'error',
                    confirmButtonText: 'Try again ?',
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
                        <label>Email id</label>
                        <input type="email" placeholder="a@b.com" onChange={this.handleChangeemail} required />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={this.handleChangepassword}  required />
                    </FormGroup>
                    <br />
                    <button type="submit" className="btn1">Register</button>
                </form>
                <p><br /><br />Already have an account ?   <Link to="/login">Log in</Link> </p>
                <Link to="/"><button className="btn2"> ← </button></Link> 
                

            </div>
        )
    }



}

export default withRouter(Registerform);
