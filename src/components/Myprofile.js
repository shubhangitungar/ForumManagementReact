import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import './Myprofile.css';
//import user from "./images/user.png";
export default class Edit extends React.Component{

constructor(props){
super(props);
this.state = {
    id:'',
  firstName: '',
  lastName: '',
  email: '',
  password:'',
  redirect: false
}
this.onChangeFirstName = this.onChangeFirstName.bind(this);
this.onChangeLastName = this.onChangeLastName.bind(this);
this.onChangeEmail = this.onChangeEmail.bind(this);
this.onChangePassword = this.onChangePassword.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}


componentDidMount(){
    const user = JSON.parse(localStorage.getItem("user"));
     const id=user.id;
axios.get('https://localhost:44372/api/Users/'+id)
.then(response => {
  this.setState({
      id:response.data.id,
    firstName: response.data.firstName,
    lastName: response.data.lastName,
    email: response.data.email,
    password:response.data.password
  });
})
.catch(function(error){
  console.log(error);
})
}

onChangeFirstName(e){
this.setState({
  firstName: e.target.value
})
}
onChangeLastName(e){
this.setState({
  lastName: e.target.value
})
}
onChangeEmail(e){
this.setState({
  email: e.target.value
})
}

onChangePassword(e){
    this.setState({
      password: e.target.value
    })
    }
    


onSubmit(e){
e.preventDefault();
const obj = {
    id:this.state.id,
  firstName: this.state.firstName,
  lastName: this.state.lastName,
  email: this.state.email,
  password:this.state.password
  //alert("User Updated:");
  
};
console.log(obj)
const user = JSON.parse(localStorage.getItem("user"));
   
const id=user.id;
axios.put('https://localhost:44372/api/Users/'+id, obj)
.then(this.setState({redirect: true}));
alert("Profile Updated Successfully...")
//this.props.history.push('/view');
}

render(){
// const { redirect } = this.state;
// if (redirect) {
//   return <Redirect to='/view' />;
// }
return(

  <form onSubmit={this.onSubmit}>
  <div class="page-content page-container" id="page-content">
      <div class="padding">
          <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                  <div class="card user-card-full">
                      <div class="row m-l-0 m-r-0">
                          <div class="col-sm-4 bg-c-lite-green user-profile">
                              <div class="card-block text-center text-white">
                                  {/* { <div class="m-b-25"> 
                                  <img src={/images/stackoverflow.png} class="img-radius" alt="User-Profile-Image"> </div> }
                                   */}
                                   <div class="m-b-25"> 
                            <img src={'images/user.jpg'} class="img-radius" /> 
                            </div>      
                                  <h3 class="f-w-600"><b>{this.state.firstName} </b></h3>
                                  <p>Welcome in Forum System</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                              </div>
                          </div>
                          <div class="col-sm-8">
                              <div class="card-block">
                                  <h4 class="m-b-20 p-b-5 b-b-default f-w-600">My Profile</h4>
                                 
                                  <div class="row">
                                      <div class="col-sm-6">
  
  
                                          <p class="m-b-10 f-w-600">firstName</p>
                                          <h6 class="text-muted f-w-400">
   <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} /></h6>
                                          
                                      </div>
                                    </div>

                                  <div class="row">
                                      <div class="col-sm-6">
  
  
                                          <p class="m-b-10 f-w-600">lastName</p>
                                          <h6 class="text-muted f-w-400">
   <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} /></h6>
                                          
                                      </div>
                                    </div>
                                 
                                 
                                 
                                 
                                  <div class="row">
                                      <div class="col-sm-6">
  
  
                                          <p class="m-b-10 f-w-600">Email</p>
                                          <h6 class="text-muted f-w-400">
   <input type="text" value={this.state.email} onChange={this.onChangeEmail} /></h6>
                                          
                                      </div></div>
                                      <div class="row">
                                      <div class="col-sm-6">
                                          <p class="m-b-10 f-w-600">Password</p>
                                          <h6 class="text-muted f-w-400">
  
   <input type="password" value={this.state.password} onChange={this.onChangePassword} />
   </h6>
                                      </div>
                                  </div>
                                  <div class="col-sm-6"><center>
   <input type="submit" className="btn btn-primary" value="Update" /></center>
   </div>
                                                                  <ul class="social-link list-unstyled m-t-40 m-b-10">
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </form>
  
  // <div style={{ marginTop: 10 }}>
  // <h3>Add New User</h3>
  // <form onSubmit={this.onSubmit}>
  //   <div>
  //     <label>First Name</label>
  //     <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName}  />
  //   </div>
  //   <div>
  //     <label>Last Name</label>
  //     <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} />
  //   </div>
  //   <div>
  //     <label>Email</label>
  //     <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
  //   </div>
    
  //   <div>
  //     <label>Password</label>
  //     <input type="text" value={this.state.password} onChange={this.onChangePassword} />
  //   </div>
  //   <div>
   

  //     <input type="submit" value="Update User" />
  //   </div>

  // </form>
  // </div>
)
}
}






{/* <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"> </div>
                                <h6 class="f-w-600">{this.state.firstName}</h6>
                                <p>Welcome in Forum System</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">{this.state.email} onChange={this.onChangeFirstName}</h6>
                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">PAssword</p>
                                        <h6 class="text-muted f-w-400">{this.state.password}</h6>
                                    </div>
                                </div>
                                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}








