import React from 'react'

export const Logout = () => {
    window.localStorage.clear(); 
    // window.localStorage.removeItem("isLogIn"); 
    // window.location.href = "/Home";
     window.location.href = "http://localhost:3000/";
  
    return (
        <div>
           
        </div>
    )
}
