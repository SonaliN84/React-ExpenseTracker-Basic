import React, { useState, useEffect, useReducer,useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from '../UI/Input/Input'
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
};

const Login = (props) => {

  const Authcxt=useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // const[a,seta]=useState(0)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid:null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid:null,
  });

  useEffect(() => {
    // const timer=setTimeout(()=>{console.log("useEffect")},5000)
    console.log("useEffect");
    // seta('1')

    return () => {
      // clearTimeout(timer)
      console.log("cleanup");
    };
  }, [passwordState.value]);
 
  const {isvalid:emailIsValid}=emailState;
  const {isvalid:passwordIsValid}=passwordState;


  useEffect(() => {

    // console.log("useEffect for email and pass")
    const identifier=setTimeout(()=>{
      setFormIsValid(emailIsValid && passwordIsValid);

    },500)
    return ()=>{
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isvalid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Authcxt.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      {/* {console.log("component")} */}
      <form onSubmit={submitHandler}>
       <Input id='email' label="E-mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
       <Input id='password' label="Password" type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
