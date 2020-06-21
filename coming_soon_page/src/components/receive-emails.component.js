import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ReceiveEmails extends Component {
    constructor(props){
        super(props);

        this.onEmailEntered = this.onEmailEntered.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            email: ''
        }
    }

    onEmailEntered(e){
        this.setState({
            email: e.target.value //value of the textbox 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const emailaddress = {
            email: this.state.email
        }
        console.log(emailaddress)

        var axiosConfig = {
            headers: {
                 "Access-Control-Allow-Origin": "*",
                'Accept': '*',
            }
        };

        axios.post('http://localhost:5000/emailers/add', emailaddress, axiosConfig)
            .then (res => console.log(res.data))
            .catch((error) => {
                console.log(error);
            })
        this.setState({
            email:''
        });
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Enter your email below for information about early access. </label>
                        <input
                            className="form-control"
                            type = "email"
                            required
                            value = {this.state.email}
                            onChange={this.onEmailEntered}                        
                            placeholder= "Enter email"
                        />
                    </div>
                    {/* <div className = "form-group"> */}
                        <button type="submit" className="btn btn-primary">Get Early Access</button>
                    {/* </div>   */}
                </form>
            </div>
        )
    }
}