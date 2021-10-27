import React, { useState } from "react";
import { Label, Input, FormGroup, Button, Card, CardHeader, CardBody } from "reactstrap";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Component } from "react";
import "./AskQuestion.css";
//import DateTime  from 'react-datetime-bootstrap';
//import DatePicker from "react-datepicker";
// import Navigation from '../Navigation'
//import { createPost } from '../../store/modules/posts/actions/postsAction';


export default class Questions extends Component {

    constructor(props) {
        super(props);
      
        // this.state = {
        //   NewQuestion : {}
        // }
      }
    
    handleSubmit (event) {	
        event.preventDefault();
        const title = event.target.title.value;
	const description = event.target.description.value;
    const createdDate=event.target.createdDate.value;
	const isLogIn = localStorage.getItem("isLogIn")

    // if (!isLogIn) {
    //     alert("Please log in to submit question")
    // }


    // const isLoggedIn = localStorage.getItem('isLogIn');

    var tempDate = new Date().toISOString();
   // var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
   // const currDate = "Current Date= "+date;
   console.log(tempDate)
   const currDate=tempDate;

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+token },
            body: JSON.stringify({ 'title': title, 'description':description,'createdDate':currDate,'userId':user.id })
        };
        console.log(requestOptions);
        const self = this;
        fetch('https://localhost:44372/api/NewQuestions', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // self.setState({ NewQuestion: data })
                    alert("Added...");
                 window.location.href = "/Question"
            });

    }

    render() {
        const isLoggedIn = localStorage.getItem('isLogIn');
        if (!isLoggedIn && isLoggedIn== undefined) {
        return (
              <Redirect to="/Login" />
          
        )
      }

     
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
     // const currDate = "Current Date= "+date;
     const currDate=date;
        return (
            <div>
            <div>
                {/* <Navigation /> */}
            </div>
            <div className="post-style container App">
            <Card className="card-style">
                <CardHeader>Create Post</CardHeader>
                <CardBody>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label>Title</Label>
                <Input type="text" name="title" placeholder="Enter title"  /*onChange={handleChange}*/ />
               
                </FormGroup>
                <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" cols="30" rows="6" name="description" id="" placeholder="Enter a short description" ></Input>
                
            
                </FormGroup>
                <br/>
                <FormGroup>
                <Label>Date</Label>
                <Input type="text" name="createdDate" value={currDate} disabled="true"></Input> 
             
                    </FormGroup><br/>
                <center>   <button type="submit" className="btn btn-primary">Add Question</button></center>
               
              
       
               
               
                {/* { currentState.PostsState.isLoading ? (
                    <Button
                    color="primary"
                    type="submit"
                    block
                    disabled
                    >
                    Creating...
                </Button>
                ) : (
                    <Button
                    color="primary"
                    type="submit"
                    block
                    >
                    Create Post
                </Button>
                )} */}
                </form>
                </CardBody>
                </Card>
            </div>
            </div>
        );
    }
}
