import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login, Register } from "./components/login/index.js";
import Home from './components/Home'
import Appstream from './components/Appstream'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/webcam' component={Appstream} />
                
                </div>
            </BrowserRouter>
    );
    }
}

export default App
