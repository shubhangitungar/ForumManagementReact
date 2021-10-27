//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import AskQuestion from './components/AskQuestion';
import Question from './components/Question';
import Answer from './components/Answer';
import { Logout } from './components/Logout';
import Myprofile from './components/Myprofile';
import { VoteUpDown } from './components/VoteUpDown';
//import Search from './components/Search';

//  import {Vote} from './components/Vote';


function App() {
  return (
   
<Router>
<div className="App">
   <Navbar />
   <br/>
  
               
   <Switch>
  
   <Route exact path="/" component={Home} />
    {/* <div>
   <Navbar /> */}
      <Route path='/Home' component={Home}/> 
    
     <Route path='/Login' component={Login}/>

    <Route path='/Register' component={Register}/>
    <Route path='/AskQuestion' component={AskQuestion}/>
    <Route path='/Question' component={Question}/>
    <Route path='/Answer' component={Answer}/>
    <Route path='/Myprofile' component={Myprofile}/>
    <Route path='/Logout' component={Logout}/>
    {/* <Route path="/Vote" component={Vote} /> */}
    {/* <Route path='/Search' component={Search}/>
     */}
    
    import 
    <Route path='/Vote' component={VoteUpDown}/>
     
{/* </div> */}
   </Switch><br/>
  
           
   <Footer />

   
   </div>
   
  
   </Router>
     
  );
}

export default App
