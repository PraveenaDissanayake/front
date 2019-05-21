import React, {Component} from 'react';
import axios from 'axios';
var validator = require("email-validator");
export default class index extends Component{

     constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {
            name: '',
            email: '',
            password: '',
            mobileNo: '',
            NIC: ''
        }
    }

    //get user value
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

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

    onChangeMobileNo(e) {
        this.setState({
            mobileNo: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: '',
            mobileNo: '',
            NIC: ''
        })
    }

    //valid sign up form 
    signup = () => {

        if (this.state.name === '' || this.state.email === '' || this.state.password === ''  ||  this.state.mobileNo  === '' || this.state.NIC === '') {
            alert("Please fill all the field ");
            return;
        }
        //validate email address
        if(!validator.validate(this.state.email)){
            alert("Email is invalid");
            return;
        }

        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobileNo: this.state.mobileNo,
            NIC: this.state.NIC
        }

        //store data in the db
        axios.post('http://localhost:4000/user/', user)
        .catch(function (err){
            console.log(err);
        });

      
        
    }

    render(){
        return(
            //sign up form fields
            <div>
            <div style={{textAlign: 'right'}}>
            <input type="submit" value="Log - In" className="btn btn-primary" />
            </div>
            <div style={{marginTop: 22}}>
                <h3>Create New Account</h3>
                <form>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>

                    
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
                        <label>Mobile No: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.mobileNo}
                                onChange={this.onChangeMobileNo}
                                />
                    </div>

                    <div className="form-group">
                        <label>NIC: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.NIC}
                                onChange={this.onChangeNIC}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sign - Up" className="btn btn-primary" onClick={this.signup}/>
                    </div>
                </form>
            </div></div>
            
        )
    }
}