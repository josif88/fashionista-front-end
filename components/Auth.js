import { useEffect, useState } from "react";

export default function Auth(props) {
  let [loggedIn, setLoggingIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      let requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3ge389pYqnPh4b7LTy8cJ5MYwo2ZDRRE", requestOptions)
        .then(response => response.json())
        .then(result => {
          localStorage.setItem("token",result.idToken)
          setLoggingIn(true);
        })
        .catch(error => console.log('error', error));
        
      }
    else {
      setLoggingIn(true);
    }}, []);

  return <>{loggedIn && props.children}</>;
}
11