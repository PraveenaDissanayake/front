import React, {Component} from 'react';

export default class bankCard extends Component{

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangecardNo = this.onChangecardNo.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.onChangeCVCNo = this.onChangeCVCNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {
            name:'',
            cardNo: '',
            amount:'',
            CVCNo: ''
        }
    }


     //get user value
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangecardNo(e) {
        this.setState({
            cardNo: e.target.value
        });
    }

    onChangeamount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onChangeCVCNo(e) {
        this.setState({
            CVCNo: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        this.setState({
             name:'',
            cardNo: '',
            amount:'',
            CVCNo: ''
        })
    }

    
    render(){
        return(
        <div>
            <div style={{marginTop: 22}}>
                <h3>Bank Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>card holder’s name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>

                    
                    <div className="form-group">
                        <label>Amount: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.amount}
                                onChange={this.onChangeamount}
                                />
                    </div>

                    <div className="form-group">
                        <label>credit card number: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.cardNo}
                                onChange={this.onChangecardNo}
                                />
                    </div>

                    <div className="form-group">
                        <label>CVC number: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.CVCNo}
                                onChange={this.onChangeCVCNo}
                                />
                    </div>

                

                    <div className="form-group">
                        <input type="submit" value="Confirm Payment" className="btn btn-primary" />
                    </div>
                </form>
            </div></div>
        )
    }
}