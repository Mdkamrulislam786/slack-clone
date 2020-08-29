import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import slackLogo from "../../img/slack.png";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    });
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} alt="slack" />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={() => signIn()}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
