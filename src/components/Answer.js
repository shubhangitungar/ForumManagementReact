import React, { useRef, useState } from "react";
import { Label, Input, FormGroup, Button, Card, CardHeader, CardBody } from "reactstrap";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import {VoteUpDown} from './VoteUpDown';
import "./Answer.css";

import { Link } from 'react-router-dom';
import queryString from 'query-string';

const list = [
    {
        id:1,
      title: " Q: Diffrence between npm and react",
      body: "Description - Javascript Framwork",
      Author:"shubhangi"
    },
    {
        id:2,
      title: " Question2 Title - Title2 goes here",
      body: " Description - Answer2 goes here",
      Author:"Deepak Borade"
    },
    {
        id:3,
      title: "Question3 Title-Title3 goes here",
      body: "Description goes here",
      Author:"Deepak Borade"
    }
    

  ];
  
  const Ans = [
    [{
        id:11,
      title: " Answer1 Title - React-JS",
      body: "Description - Javascript Framwork",
      Author:"shubhangi"

    },
    {
        id:12,
      title: " Answer2 Title - React-JS",
      body: "Description - Javascript Framwork",
      Author:"pooja"
    }
    ]
    ,
   [],
   []
  ];



  export default class Question extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        data : {}
      }
    }
  

    componentDidMount() {
      let params = queryString.parse(this.props.location.search)
      let id = params['id'];
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer '+token }
      
    };
      console.log(id);
      fetch("https://localhost:44372/api/NewQuestions/"+id,requestOptions).then(res => res.json()).then(
        result => {
          this.setState({data:result});
          console.log(this.state);
          
        }
      )
    }
    
    handleSubmit (event) {	
    
      event.preventDefault();
      const description = event.target.description.value;
      let params = queryString.parse(this.props.location.search)      
      const questionId = params["id"]

      const isLogIn = localStorage.getItem("isLogIn")

      if (!isLogIn) {
          alert("Please log in to submit question")
      }

      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token  },
        body: JSON.stringify({'description': description,'userId':user.id, 'questionId': questionId })
    };

    console.log("POST answer request: " + requestOptions.body);
    
    const self = this;
    fetch('https://localhost:44372/api/Answers', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("Output = " + JSON.stringify(data));
            // self.setState()

        window.location.href = "/Answer?id="+questionId
      //  window.location.reload();
       });
    }
  
    render() {
      const box = {
        color: "brown",
        fontSize: '12px',
        textAlign: 'right'
    }

    const box1={
      color: "#3B4045",
     marginLeft:"50px",
      Font:"27px -apple-system, BlinkMacSystemFont"
    }
      
    const btnsmall= {
      padding: "0.2rem 0.2rem",
      fontSize: "12px",
      border: "none",
      Background:"#E1ECF4",
      color:"#39739D"
    }

    const vt2={
      color:"#232629",
      font:"13px -apple-system, BlinkMacSystemFont"
    }
       let params = queryString.parse(this.props.location.search)
       let id = params['id']-1;

       console.log(this.state)

       if (Object.keys(this.state.data).length == 0) {
         return (<div></div>);
       }

        return (
          <div className="question">
            <div className="leftcol">
             {/* <center> <h3><u>Question with Answers</u> </h3></center>  */}
             <h2 style={box1}>Q.  {this.state.data.title} </h2> 


            </div><br/>
            <div style={{background:"#FDF7E2"}}>
              <div className="fg">

              {/* <h1 style={box1}>Q.  {this.state.data.title} </h1>  */}


           
              {/* <div style={{marginTop:"80px"},{float:"top"}} > */}
              <div style={{display:"flex"}}>
              <div style={{float:"left"},{marginTop:"26px"}}><VoteUpDown score = {this.state.data.votes == undefined ? 0 : this.state.data.votes.length} questionId = {this.state.data.id}/>
              </div>

             <div style={{marginLeft:"40px"}}>  {this.state.data.description}<br/>
    
             </div>
             </div>
            </div>
            {/* <i> <h7 style={{fontSize: "14px"}}> {this.state.data["user"].firstName}</h7></i> */}
             {/* </div> */}
              </div>
              <br/>
          <h3 className="fg">{this.state.data["answers"].length == 0 ? 'No ': this.state.data["answers"].length} Answers</h3>
         
            <div className="rightcol">
              <ul>
                {this.state.data["answers"].map((item, i) => (
                  <div>
                  <li style={{background:"#F6F6F6"}}
                    className="list-group-item"
                    data-id={item.id}
                   
                  // onClick={()=>this.setState({correctAnswer:item.body,selectedQuestion:item.title})}
                  >
                      

                     
                  <div >
                  {/* long_string.replace(/(.{80})/g, "$1<br>"); */}
                  {/* {item.description.replace(/(.{30})/g, "$1<br/>")} */}
               
                  
                 
                  <pre>{item.description}</pre><br/>
                   
                   
                    {/* {this.state.data["user"].firstName} */}
                    <div style={box}><i>
                {item.user == null ? "" : item.user.firstName }</i>
                <br/> asked by {this.state.data.createdDate}
                </div>
                <div style={{float:"right"}}> <img style={{height:"50px"},{width:"50px"}} src={'images/user.jpg'}/>
              
               </div>
                    </div><br/><br/>
                    <div>CodeSandbox<br/>
                    {/* <i className="forgot-password text-right" /> */}
                 {/* <a href="#">Javascript</a> */}
                 {/* <button style={btnsmall}> javascript</button>{' '}
                 <button style={btnsmall}> html</button>{' '}
                 <button style={btnsmall}> json</button>{' '}
                 <button style={btnsmall}> typescript</button> */}
                
                    </div>


                  
                    </li>
                   <br/>
                   <button style={btnsmall}> javascript</button>{' '}
                 <button style={btnsmall}> html</button>{' '}
                 <button style={btnsmall}> json</button>{' '}
                 <button style={btnsmall}> typescript</button><br/><br/>
                
                 {/* <div style={{color:"#6A737C"},{Font:"8px -apple-system, BlinkMacSystemFont"}}>
                   Share{' '}Edit{' '}Follow

                   <a href="/q/69461154/16991424" rel="nofollow" itemprop="url" class="js-share-link js-gps-track" title="Short permalink to this question" data-gps-track="post.click({ item: 2, priv: -1, post_type: 1 })" data-controller="se-share-sheet s-popover" data-se-share-sheet-title="Share a link to this question" data-se-share-sheet-subtitle="(Includes your user id)" data-se-share-sheet-post-type="question" data-se-share-sheet-social="facebook twitter devto" data-se-share-sheet-location="1" data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f4.0%2f" data-se-share-sheet-license-name="CC BY-SA 4.0" data-s-popover-placement="bottom-start" aria-controls="se-share-sheet-0" data-action=" s-popover#toggle se-share-sheet#preventNavigation s-popover:show->se-share-sheet#willShow s-popover:shown->se-share-sheet#didShow">Share</a>
                 <br/><br/><br/>
                 </div> */}
                   </div>
                   
                  

            )
            
           
            )}

{/* <form onSubmit={this.handleSubmit}> */}

<form onSubmit={this.handleSubmit.bind(this)}>
<FormGroup>
<Label><h3>Your Answer</h3></Label>
<Input type="textarea" cols="30" rows="6" name="description" id="" placeholder="Enter a short description" />
  <button type="submit" className="btn btn-primary">Post Your Answer</button>
  </FormGroup> <br />
  </form>
           
          </ul>
        </div>
      </div>
    );
  }
}

  