import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
  
// const  Vote = () => {
  function Vote(){
  return (
    <div 
    // style={{
    //   margin: 'auto',
    //   display: 'block',
    //   width: 'fit-content'
    // }}
    >
      {/* <h3>How to use HeartCheckBox in ReactJS?</h3> */}
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
        // label="Instagram Like Button"
      />
    </div>
  );
}
  
export default Vote;


// import './Vote.css';
// import React from 'react';
// import {Motion, spring} from 'react-motion';
// const { Component, Children, PropTypes } = React
// // const { Motion, spring } = ReactMotion

// const Arrow = ({direction, ...props}) => (
//   <svg viewBox="0 0 28 12" {...props}>
//     <polyline
//       points={
//         direction === 'up' ?
//         "0.595,11.211 14.04,1.245 27.485,11.211" :
//         "27.485,0.803 14.04,10.769 0.595,0.803"
//       }
//     />
//   </svg>
// )

// Arrow.defaultProps = {
//   direction: 'up'
// }
  
// class NumberColumn extends Component {
//   _getNumbers() {
//     let numbers = []
//     let i = 0
    
//     while (i < 10) {
//       numbers.push(<div>{i}</div>)
//       i++
//     }
    
//     return numbers
//   }
  
//   render() {
//     const { current } = this.props
    
//     return (
//       <div className="vote__column">
//         <Motion
//           style={{y: spring(current * 10)}}
//         >
//           {({y}) =>
//             <div
//               style={{
//                 transform: `translateY(${-y}%)`
//               }}
//             >
//               {this._getNumbers()}
//             </div>
//           }
//         </Motion>
//       </div>
//     )
//   }
// }

// export class Vote extends Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       count: 43
//     }
//   }

//   componentDidMount() {
//     // for demonstration purposes
//     this.setState({count: 22})
//   }
  
//   _getCount() {
//     const counts = this.state.count.toString().split('')
    
//     return counts.map(_count => {
//       if (_count === '-') {
//         return <span className="vote__column">-</span>
//       } else {
//         return <NumberColumn current={parseFloat(_count)} />
//       }
//     })
//   }

//   render() {
//     const { count } = this.state
    
//     return(
//       <div className="vote">
//         <Arrow
//           direction="up"
//           className="vote__arrow vote__arrow--up"
//           onClick={() => this.setState({count: count + 1})}
//         />
//         <div className="vote__columns">
//           {this._getCount()}
//         </div>
//         <Arrow
//           direction="down"
//           className="vote__arrow vote__arrow--down"
//           onClick={() => this.setState({count: count - 1})}
//         />
//       </div>
//     )
//   }
// }

// //ReactDOM.render(<Vote />, document.getElementById('app'));