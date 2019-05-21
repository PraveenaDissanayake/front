import React, {Component} from 'react';
import axios from 'axios';
var validator = require("email-validator");
export default class Login extends Component{
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    //user value
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    //valid login up form 
    login = () => {

    
        if (this.state.email === '' || this.state.email === '' || this.state.password === ''  ||  this.state.mobileNo  === '' || this.state.NIC === '') {
            alert("Please fill all the field ");
            return;
        }
        if(!validator.validate(this.state.email)){
            alert("Email is invalid");
            return;
        }

        //validate authentication
        axios.get('http://localhost:4000/user/' + this.state.email, function(req, res){
            if(!this.state.email === res.body.email){
                alert("Wrong email");
            }else if(!this.state.password === res.body.password){
                alert("Wrong password");
            }else{
                alert("Successfully log in");
            }
        } );
        
    }
    render(){
        return(
            <div style={{marginTop: 22}}>
                <h3>Login</h3>
                <form>

                <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                </div>

                <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                </div>

                <div className="form-group">
                        <input type="submit" value="Log In" className="btn btn-primary" onClick={this.login}/>
                    </div>
                </form>
            </div>
        )
    }
}