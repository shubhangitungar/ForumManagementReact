import React, { useState } from "react";
//import { Label, Input, FormGroup, Button, Card, CardHeader, Cardd } from "reactstrap";
import { Redirect } from 'react-router-dom';
//import { useSelector, useDispatch } from "react-redux";
import { Component } from "react";
import './Question.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
// import Vote from './Vote';
import {VoteUpDown} from './VoteUpDown';
import {Pagination} from './Pagination';
import Moment from 'react-moment';
const colors = ["#FDF7E2","#F6F6F6"];
const getUniqueFromRange = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
const getRandomItem = items => {
  return items[getUniqueFromRange(0, items.length)];
};





const list = [
    {
        id:1,
      title: <a href="#">Q: Diffrence between npm and react</a>,
      d: "If I have to install the skeleton project I have to type npx create-react-app my-app in command-line. … I was wondering why does the Facebook in Github have npx create-react-app my-app rather than npm create-react-app my-app?",
      author:"shubhangi"
    },
    {
        id:2,
      title: " Question2 title - title2 goes here",
      d: " d - Answer2 goes here",
      author:"Deepak Borade"
    },
    {
        id:3,
      title: "Question3 title-title3 goes here",
      d: "d goes here",
      author:"Deepak Borade"
    }
    

  ];
 


  export default class Question extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      questions : [],
      test: false
      
      
    }
  }

 

   timeSince(dateStr) {
    console.log(dateStr);
    var date = Date.parse(dateStr);
    var seconds = Math.floor((new Date() - date) / 1000);
  
    console.log(seconds);

    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  

  

  componentDidMount() {

   
    console.log("Inside componentDidMount")
    let params = queryString.parse(this.props.location.search)
    const key=params['key'];
    console.log(params);

    this.callBackend(key);  
}

callBackend(key) {
  
  var url = new URL('https://localhost:44372/api/NewQuestions')

  if (key != undefined) {
    var params = {'key' : key}
    url.search = new URLSearchParams(params).toString();
  }

  console.log(url)
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': 'Bearer '+token }
   // body: JSON.stringify({'description': description,'userId':user.id, 'questionId': questionId })
};

  // fetch("https://localhost:44372/api/NewQuestions").then(res => res.json()).then(
  fetch(url,requestOptions).then(res => res.json()).then(
    result => {
      this.setState({questions:result});
      console.log(this.state);
      // console.log(this.state.questions[0].user.firstName);
    }
  )
}

render() {   
 
  
  const isLoggedIn = localStorage.getItem('isLogIn');
if (!isLoggedIn && isLoggedIn== undefined) {
  return (
        <Redirect to="/Login" />
    
  )
}
  
    const box = {
      color: "brown",
      fontSize: '12px',
      textAlign: 'right',
      backgroundColor:'#FDF7E2',
      float:"right"
      
  }
  const box1={
    color: "#0074CC",
    fontSize:'17px',
    font:"20px -apple-system, BlinkMacSystemFont"
  }
  const btnsmall= {
    padding: "0.2rem 0.2rem",
    fontSize: "12px",
    border: "none",
    Background:"#E1ECF4",
    color:"#39739D"
  }
  
 
    console.log(this.state);
   
        return (
          
          
          <div className="question">
           
            <div className="leftcol">
            <center>  <h2><u>Top Questions</u></h2></center>
            {/* <button type="submit" style={{float:"right"}} onClick={} className="btn btn-primary">Ask Quetion</button> */}
            <Link to="/AskQuestion" style={{float:"right"}} className="btn btn-primary">Ask Question</Link>
           <br/>
            </div><br/>
           
            <div className="rightcol">
           
              <ul>
             
                {this.state.questions.map((item, i) => (
                  <li
                    className="list-group-item"
                    key={i} 
                    data-id={item.title}
                   
                  // onClick={()=>this.setState({correctAnswer:item.d,selectedQuestion:item.title})}
                  >
                  {/* <div style={{height:"18px"}}> <Vote /></div> */}
                 
                   <div className="aa " style={{float:"left"}} >
                      <VoteUpDown  score = {item.votes == undefined ? 0 : item.votes.length} questionId = {item.id}/></div>
             
              <div style={{
              background: getRandomItem(colors)},{marginLeft:"100px"}} >
             
                <div>
                  <Link to={`/Answer?id=${item.id}`} style={box1}>  Q.  {item.title}</Link>
                </div><br/>
                {item.description}
               
                
                <br/>
                 <div style={{float:"right"}}> <img style={{height:"50px"},{width:"50px"}} src={'images/user.jpg'}/>
                 
                </div>
                <i style={box}><h7> {item.user.firstName}</h7><br/>
                {/* asked at {item.createdDate}  */}
              asked {this.timeSince(item.createdDate)} ago
               
               {/* {} Moment.utc("2019-12-04 12:00:24").local().startOf('seconds').fromNow()} */}
             
                </i>
               
                  <br/>
                  
                <button style={btnsmall}> javascript</button>{' '}
                <button style={btnsmall}> reactjs</button>{' '}
                 <button style={btnsmall}> html</button>{' '}
                 <button style={btnsmall}> json</button>{' '}
                 <button style={btnsmall}> typescript</button>{' '}
               
                </div>
                
                
            </li>
            
            ))}
          </ul>
        </div>
        {/* <Pagination/> */}
        
      </div>
      
    );
  }
}


