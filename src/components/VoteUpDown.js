import React from 'react';

export class VoteUpDown extends React.Component {
  constructor() {
    super();
    
    this.state = {
      score: this.getScore(),
      questionId : ""
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

    getScore() {
        // const max = 100;
        // const min = -5;
        // var randomScore = Math.floor(Math.random() * (max - min + 1)) + min;
        // return randomScore;
        return 0;
    }

    componentDidMount() {
        this.setState({score: this.props.score, questionId : this.props.questionId});
    }

    render() {
        const vt1={
            color:"#6A737C",
            Font:"21px -apple-system, BlinkMacSystemFont"
          }
        return (


<div>
        {/* <button className="countUp" onClick={this.increment}>UP</button> */}

        <button onClick={this.increment} class="js-vote-up-btn flex--item s-btn s-btn__unset c-pointer " data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary" data-unselected-classes="" aria-describedby="--stacks-s-tooltip-nmmmlgp8" style={{border:"none"}}>
            <svg style={{color:"#F6F6F6"}} aria-hidden="true" class="svg-icon iconArrowUpLg" width="27" height="27" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26Z"></path></svg>
        </button>

        <div style={vt1}>
            <center>
                {this.state.score}
            </center>
        </div>

        {/* <button className="countDown" onClick={this.decrement}>DOWN</button> */}
        <button  onClick={this.decrement} class="js-vote-down-btn flex--item s-btn s-btn__unset c-pointer " data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary" data-unselected-classes="" aria-describedby="--stacks-s-tooltip-qwdoqvnw"  style={{border:"none"}}>
            <svg aria-hidden="true" class="svg-icon iconArrowDownLg" width="27" height="27" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10Z"></path></svg>
        </button><br/>
            <center>
        <svg aria-hidden="true" class="svg-icon iconBookmark" width="18" height="18" viewBox="0 0 18 18"><path d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6Zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77Z"></path></svg>
            </center>
      </div>
    );
  }

  incrementBackend() {  
    const user = JSON.parse(localStorage.getItem("user"));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'questionId': this.state.questionId,'userId':user.id })
    };
    console.log(requestOptions);
    const self = this;
    fetch('https://localhost:44372/api/VoteOnQuestion', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                score: this.state.score + 1,
              });          
        })
        .catch(error => {
            console.error('There was an error in upvote!', error);
        });
  }
  
  increment() {
    this.incrementBackend();
    // this.setState({
    //   score: this.state.score + 1,
    // });
  }

  decrementBackend() {
  
    var url = new URL('https://localhost:44372/api/VoteOnQuestion')
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != undefined) {
        var params = {'questionId' : this.state.questionId, 'userId': user.id}
        url.search = new URLSearchParams(params).toString();
      }
    
    console.log(url)

    fetch(url, { method: 'DELETE' }).then(
            response => {
                console.log(response);
                if (response.ok) {
                    this.setState({
                        score: this.state.score - 1,
                      });    
                }
            }
          )
          .catch(error => {
            console.error('There was an error in downvote!', error);
        });
  }
  
  decrement() {
    this.decrementBackend();
    // this.setState({
    //   score: this.state.score - 1,
    // });
  }
}