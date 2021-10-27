import React, { useState, useEffect } from 'react';
import {FormControl,Form,FormGroup} from 'react-bootstrap';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Dropdown } from 'react-bootstrap';
// import { Votectr } from './Votectr';
//import SearchField from "react-search-field";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function Greeting(props) {
    const isLoggedIn = localStorage.getItem('isLogIn');
    console.log(isLoggedIn);
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function UserGreeting() {
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <div className='nav-links'>
      <Dropdown>
      <Dropdown.Toggle 
      variant="secondary btn-sm" 
      id="dropdown-basic">
          {user.firstName}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
          <Dropdown.Item href="/Myprofile" >My Profile</Dropdown.Item>
          <Dropdown.Item href="./Logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
    );
  }
  
  function GuestGreeting() {
    console.log("Guest greeting")
    return (
      
      
      <Link
      to='/Login'
      className='nav-links'
      onClick={closeMobileMenu} >
        Login
      </Link>

    );
  }

 function searchContent (event) {
    
    event.preventDefault();
        const searchval = event.target.searchval.value;

    window.location.href="/Question?key="+searchval ;  

  }

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Forum
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>{' '}

           <Form inline className='navbar-form'  onSubmit={searchContent}> 
           {/* <FormGroup controlId="formInlineName"> */}
           <div className="input-group">
                <FormControl type="text"  name="searchval"  placeholder="Search" className='nav-links'  />{' '}
           
              {/* {button && <Button type="submit" buttonStyle='btn--outline' >Search</Button>} */}
              <input type="submit"   className="btn btn-primary" value="search"  /> 
            </div>
             {/* </FormGroup> */}
            
            </Form>
                 
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
           </li>
            <li className='nav-item'>
              <Link
                to='/Question'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Questions
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/AskQuestion'
                className='nav-links'
                onClick={closeMobileMenu}
              >Ask-Question
              </Link>
            </li>

           
            <li>
            <Greeting />
            </li>
          </ul>         
        </div>
      </nav>
      <li>
      
            {/* <Link
      to='/Votectr'
      className='nav-links'
      onClick={closeMobileMenu} >
        Vote
      </Link> */}

            </li>
    </>
  );
}

export default Navbar;