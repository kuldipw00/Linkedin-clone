import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import { Header } from "./Header";
import { Login } from "./Login";
import { Siderbar } from "./Siderbar";
import { Widget } from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(( ) => {
    auth.onAuthStateChanged((userAuth) => {
     
      if (userAuth) {
        
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  

  return (
    <div className="app">
      {/* Header */}
      <Header />
      <h1>{console.log(user)}</h1>

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Siderbar />
          <Feed />
          <Widget/>
        </div>
      )}
    </div>
  );
}

export default App;
