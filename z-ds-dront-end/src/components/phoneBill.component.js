import React, {Component} from 'react';

export default class phoneBill extends Component{

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.onChangePin = this.onChangePin.bind(this);
        this.onChangePhonenO = this.onChangePhonenO.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {
            name:'',
            amount:'',
            phoneNo:'',
            pin: '',
        }
    }


     //get user value
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePhonenO(e) {
        this.setState({
            phoneNo: e.target.value
        });
    }

    onChangeamount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onChangePin(e) {
        this.setState({
            pin: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({
            name:'',
            amount:'',
            phoneNo:'',
            pin: ''
        })
    }

     //valid login up form 
    confirm = () => {

      
            alert("Confirmation message has been sent to your  email address and phone no ");
         
        
    }
    
    render(){
        return(
        <div>
            <div style={{marginTop: 22}}>
                <h3>Phone Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Users name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>

                    
                    <div className="form-group">
                        <label>phone number: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.phoneNo}
                                onChange={this.onChangePhonenO}
                                />
                    </div>

                    <div className="form-group">
                        <label>pin: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.pin}
                                onChange={this.onChangePin}
                                />
                    </div>

                    <div className="form-group">
                        <label>Amount: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeamount}
                                />
                    </div>

                

                    <div className="form-group">
                        <input type="submit" value="Confirm Payment" className="btn btn-primary" onClick={this.confirm}/>
                    </div>
                </form>
            </div></div>
        )
    }
}