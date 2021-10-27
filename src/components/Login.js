import React, { Component } from "react";



//import { Link } from 'react-router-dom';

//import Register from './components/Register';
//import {Form,FormGroup,Label,Input} from 'reactstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);
      
        
      }
    
      handleSubmit (event) {	
        event.preventDefault();
    
    const Email = event.target.Email.value;
    const Password = event.target.Password.value;

   
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'Email':Email,'Password':Password })
        };
        console.log(requestOptions);
       // const self = this;
        fetch('https://localhost:44372/api/Users/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.user === undefined || data.user=="") {
                    alert('Invalid Credentials');
                    return;
                }
                // self.setState({ NewQuestion: data })
    
               // window.location.href = "/Question"

            //   if (data.status == '200')    {
               
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('isLogIn',true);
                localStorage.setItem('token', data.token)
                    // props.history.push('/Question')    
                    window.location.href = "/Question"
               }
            //    else    
            //    alert('Invalid Credentials');    
            // }
            );
    
    }
    
    render() {
        let url="./Register";
        return (
            <div className="inner"> 
           <form onSubmit={this.handleSubmit}>

              <center>  <h1>Log in</h1> </center>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="Email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name="Password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                
             <center>   <button type="submit" className="btn btn-primary">Sign in</button></center>
                <p className="forgot-password text-right">
                New User <a href={url}>Registration?</a>
                


                 
                </p>
            </form>
            </div>
        );
    }
}