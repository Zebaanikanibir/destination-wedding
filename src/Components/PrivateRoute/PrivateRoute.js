import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
import jwt_decode from "jwt-decode";
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
 
      /* prints:
       * { foo: "bar",
       *   exp: 1393286893,
       *   iat: 1393268893  }
       */
       
      // decode header by passing in options (useful for when you need `kid` to verify a JWT):
      const decodedHeader = jwt_decode(token, { header: true });
      console.log(decodedHeader);

      // get current time
      const currentTime = new Date().getTime() / 1000;
      // compare the expiration time with the current time
      // will return false if expired and will return true if not expired
      return decodedToken.exp > currentTime;
    }


    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                (loggedInUser.email || isLoggedIn())  ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;