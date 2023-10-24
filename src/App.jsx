import React, { useEffect } from "react";
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import {auth} from './components/firebase';
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";


const promise = loadStripe(
  "pk_live_51O4YjuHKJURbZZ4oBlgvwYYdhhdAOTMg8lAZCYFfsbuBUl4jOK8o7VPLYpFly86rTTXOm9bb2S1ROt49XV1h5uzG00UjhZaaR1"
);



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);
      
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
         dispatch({
          type: "SET_USER",
          user: null,
        });

       }

      }) 
   },[]);
  
  return (
    <BrowserRouter>
      <div className='app'> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/orders'
            element={
              <>
              <Header />
              <Orders />
              </>
            } />
          <Route path='/checkout'
            element={
              <>
              <Header />
              <Checkout />
              </>
            } />
          <Route path='/payment'
            element={
              <>
                <Header />
                <Elements stripe={promise}>
              <Payment/>
                </Elements>
              </>
              } />
          <Route path='/'
            element={
              <>
              <Header />
              <Home />
              </>
            } />
        </Routes>
           
          
     
      </div>
      
    </BrowserRouter>

   
  );
}

export default App;
