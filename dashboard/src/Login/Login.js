import React,{useState, useEffect} from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Login({login}) {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect (() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password, enableSubmit]);



 
  return (
    <div className={css(style["App-body"])}>
    <form onSubmit={handleLoginSubmit} className={css(style.form)}>
       <p>Login to access the full dashboard</p>
      
        <label className={css(style.label)} htmlFor="email">Email:</label>
        <input
         type='email' 
         name='email'
          id="email"
          value={email}
          onChange={handleChangeEmail}/>

       
        <label  className={css(style.label)}  htmlFor="email">Password:</label>
        <input
         type='password'  
         name='password' 
         id="password" 
         value={password}
         onChange={handleChangePassword}/>
         

        <input  type='submit' value="OK"  disabled={!enableSubmit}/>
    </form>

  
    </div>
  )
}

const style = StyleSheet.create({
  body: {
    fontSize: "2rem"
  },

  label : {
       fontWeight: "bold",
       

  },
  form: {
    display:"flex",
    width: "60",
    gap: "2rem",
    fontSize:"inherit",
    "@media (max-width: 900px)": {
    
     flexDirection: "column",
   },
  },
        
 "App-body": {
    fontSize: "1rem",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },


});
