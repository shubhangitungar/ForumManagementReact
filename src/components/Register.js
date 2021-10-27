import React, {Component } from "react";

//import './index.css';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };









export default class Register extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
          FirstName: null,
          Email: null,
          Password: null,
          errors: {
            FirstName: '',
            Email: '',
            Password: '',
          }
         
        };
      }





      
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;


    // if (typeof fields["name"] !== "undefined") {
    //   if (!fields["name"].match(/^[a-zA-Z]+$/)) {
    //     formIsValid = false;
    //     errors["name"] = "Only letters";
    //   }
    // }

switch (name) {
      case 'FirstName': 
        errors.FirstName = 
         // value.length < 3 ? 'Please Enter Valid Name!': '';
          typeof(value)!=='undefined' && value.match(/^[a-zA-Z]+$/) ?'':'please Enter Valid Name';


        break;
      case 'Email': 
        errors.Email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'Password': 
        errors.Password = 
          value.length < 6
            ? 'Password must be at least 6 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fields: {},
    //         errors: {}
    //       }
        
      



    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);

    // };

    // handleChange(e) {
    //   let fields = this.state.fields;
    //   fields[e.target.name] = e.target.value;
    //   this.setState({
    //     fields
    //   });

    // }







    handleSubmit (event) {	
        event.preventDefault();
        // if(validateForm(this.state.errors)) {
        //     console.info('Valid Form')
        //   }else{
        //     console.error('Invalid Form')
        //   }
        
      

   

  const FirstName = event.target.FirstName.value;
	const LastName = event.target.LastName.value;
	const Email = event.target.Email.value;
  const Password = event.target.Password.value;
  const ConfirmPassword = event.target.ConfirmPassword.value;

  
  if (FirstName == '' || Email == '' || Password == '') {
    alert("Fill all required fields");
    return;
  }
  if (Password != ConfirmPassword) {
    alert("Passwords don't match");
    return;
  }

     
     const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'FirstName': FirstName, 'LastName':LastName,'Email':Email,'Password':Password })
        };
        console.log(requestOptions);
       // const self = this;
        fetch('https://localhost:44372/api/Users', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
              //   if (data ==undefined) {
              //     alert('Please Enter All Fields..');
              //     return;
              // }
              
                // self.setState({ NewQuestion: data })
                alert("User Added Successfully...");
                window.location.href = "/Login"
              
            });

    }




   

    render() {
        const {errors} = this.state;
        let url="./Login";
        return (
            <div className="inner"> 
            
            <form onSubmit={this.handleSubmit}>
               <center> <h2>Register</h2></center>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="FirstName" className="form-control" placeholder="First name"  
                    
                    onChange={this.handleChange} noValidate />
              {errors.FirstName.length > 0 && 
                <span className='error'>{errors.FirstName}</span>}
                   
                 </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="LastName" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"  name="Email" className="form-control" placeholder="Enter email" 
                    onChange={this.handleChange} noValidate />
                    {errors.Email.length > 0 && 
                      <span className='error'>{errors.Email}</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="Password" className="form-control" placeholder="Enter password" 
                    onChange={this.handleChange} noValidate />
                    {errors.Password.length > 0 && 
                      <span className='error'>{errors.Password}</span>}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="Password" name="ConfirmPassword" className="form-control" placeholder="Enter password"  />
                   
                </div>


                <br/>
               <center> <button type="submit" className="btn btn-primary" 
              >Register</button>
                </center><p className="forgot-password text-right">
                    Already registered <a href={url}>log in?</a>
                    
                </p>
            </form>
            </div>
        );
    }
}