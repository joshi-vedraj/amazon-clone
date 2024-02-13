import React, { Fragment,useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [,dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth,authUser=>{
      console.log("The User Is: "+authUser);
      if(authUser){
          //the user is/was logged in
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }else{
          // the user is logged out
          dispatch({
            type:"SET_USER",
            user:null
          })
      }
    });
  },[dispatch]);

  return (
    <div className='app'>
      <Router>        
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/' element={<Fragment><Header/><Home/></Fragment>} />
            <Route exact path='/checkout' element={<Fragment><Header/><Checkout /></Fragment>}/>
            <Route exact path='/payment' element={<Fragment><Header/><Payment /></Fragment>}/>
          </Routes>

      </Router>
      
    </div>
  );
}

export default App;
