import React, {Component} from 'react';
import axios from 'axios';

export default class train extends Component{

    constructor(){
        super();
        this.onChangeNo = this.onChangeNo.bind(this);
        this.state={ 
            no: '',
            catergories: []
        }
    }

    componentDidMount(){
        axios.get('localhost:4000/tickets')
        .then(response => {
            this.setState({catergories:response.data});
        })
    }

    //get user value
    onChangeNo(e) {
        this.setState({
            no: e.target.value
        });
    }
    render(){
        return(
            
                <div style={{marginTop: 22}}>
                <h3>Train Details</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Train name</th>
                            <th scope="col">from</th>
                            <th scope="col">To</th>
                            <th scope="col">Arrival Time</th>
                            <th scope="col">Depature Time</th>
                            <th scope="col">No of seats</th>
                            <th scope="col">Available seat</th>
                            <th scope="col">price</th>
                            <th scope="col">qty</th>
                            <th scope="col">Book </th>
                        </tr>

    <tr className="table-row-1">
    <td>#1</td>
    <td>Ruhunu Kumari</td>
    <td>Galle</td>
    <td>Colombo</td>
    <td>12.00 p.m </td>
    <td>2.00 p.m</td>
    <td>70</td>
    <td>25</td>
    <td>Rs: 100.00 </td>
    <td> 4</td>
    <td><input type="submit" value="Book Now" className="btn btn-primary" /></td>
  </tr>
  <tr className="table-row-2">
   <td>#2</td>
    <td>Rajarata</td>
    <td>Kandy</td>
    <td>Colombo</td>
    <td>05.00 p.m </td>
    <td>10.00 p.m</td>
    <td>84</td>
    <td>82</td>
    <td>Rs: 125.00 </td>
    <td> <input  type="text"className="form-control"value={this.state.no}onChange={this.onChangeNo}/></td>
    <td><input type="submit" value="Book Now" className="btn btn-primary" /></td>
  </tr>
  <tr className="table-row-3">
    <td>#3</td>
    <td>Mahawa</td>
    <td>Matale</td>
    <td>Colombo</td>
    <td>11.00 a.m</td>
    <td>10.00 a.m</td>
    <td>64</td>
    <td>05</td>
    <td>Rs: 75.00 </td>
    <td> <input  type="text"className="form-control"value={this.state.no}onChange={this.onChangeNo}/></td>
    <td><input type="submit" value="Book Now" className="btn btn-primary" /></td>
  </tr>
                        <tbody>
                            {
                                this.state.catergories.map(catergory => {
                                    return(
                                           <tr className="table-row-3">
                                           <td>#3</td>
                                            <td>{catergory.ticketName}</td>
                                            <td>{catergory.from}</td>
                                            <td>{catergory.to}</td>
                                            <td>{catergory.arrivalTime}/td>
                                            <td>{catergory.depaTime}/td>
                                            <td>{catergory.noOfSeat}</td>
                                            <td>{catergory.remain}</td>
                                            <td>{catergory.price}</td>
                                            <td> <input  type="text"className="form-control"value={this.state.no}onChange={this.onChangeNo}/></td>
                                            <td><input type="submit" value="Book Now" className="btn btn-primary" /></td>
                                            </tr>
                                )
                                })
                                

                                







                            }
                        </tbody>
                    </thead>
                </table>

                <div >
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h1>Shooping Cart</h1>
                    <form>
                        <p>Total Price :       Rs:400</p>
                        <p>Discount:                 40</p>
                        <p>Sub Price:           Rs:360</p>
                    </form> 
                    <td><input type="submit" value="Phone Bill" className="btn btn-primary" /></td>
                    <td><input type="submit" value="Bank Card" className="btn btn-primary" /></td>
                </div>
            </div>
        )
    }
}

