import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import Booked from './Components/Booked/Booked';
import BookingList from './Components/Home/Home/BookingList/BookingList';
import AddServices from './Components/Home/AddServices/AddServices';
import Dashboard from './Components/Dashboard/Dashboard';
import AddReview from './Components/Home/AddReview/AddReview';
import AddAdmin from './Components/Home/Home/AddAdmin/AddAdmin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      
     <Router>
    
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path="/addReview">
            <AddReview />
          </Route>
          <PrivateRoute path="/addServices">
           <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
        </Switch>
        <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/addAdmin">
            <AddAdmin />
          </Route>
          <PrivateRoute  path="/booked">
            <Booked />
          </PrivateRoute>
          <PrivateRoute  path="/bookingList">
            <BookingList />
          </PrivateRoute>
           
    </Router>
    </UserContext.Provider>
  );
}

export default App;
