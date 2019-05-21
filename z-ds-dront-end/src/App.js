
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import index from "./components/index.component"
import login from "./components/login.component";
import train from "./components/train.component";
import bank from "./components/bankCard.component";
import phone from "./components/phoneBill.component";

import logo from "./download.jpeg";


class App extends Component {
    render(){
        return (
            <Router>
                <div className="container">
                    <h1>Train Reservation System</h1>
                    <Route path="/" exact component={index}/>
                    <Route path="/login" component={login} />
                    <Route path="/train" component={train} />
                    <Route path="/bank" component={bank} />
                    <Route path="/phone" component={phone} />

                    
                </div>
            
            </Router>
            
        );
    } 
}

export default App;