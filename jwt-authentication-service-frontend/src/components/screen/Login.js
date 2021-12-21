import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

const useStyles = makeStyles ( ( theme ) => ( {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
      '& .MuiFormControl-root': {
        margin: theme.spacing(1),
      },
    },
  }));

function Login(props) {

    const classes = useStyles ();

    const [userInfo, setUserInfo] = useState({userName : "", userPassword : ""});

    const onUserInfoChangeHandler = (e) => {
  
      setUserInfo((prevUserInfo) => {
  
        return {...prevUserInfo, [e.target.name] : e.target.value};
        
      }); 

    };

    const onTestSubmit = async (e) => {

        e.preventDefault();

      let test = await axios.get("http://localhost:8080/");

      console.log(test.data);
    }
    return (
    <>
        {
            <div id="loginFormContainer">
                <form id="loginForm" className={classes.root} autoComplete="off" >
                    
                    <TextField

                        id="userName"
                        data-testid="userName"
                        name="userName"
                        label={""}
                        disabled={false}
                        onChange={onUserInfoChangeHandler}
                        value={userInfo.userName || ""}
                        InputLabelProps={{
                            shrink: true
                        }}

                    />
                    <TextField

                        id="userPassword"
                        data-testid="userPassword"
                        name="userPassword"
                        label={""}
                        type="password"
                        disabled={false}
                        onChange={onUserInfoChangeHandler}
                        value={userInfo.userPassword}
                        InputLabelProps={{
                            shrink: true
                        }}

                    />
                    <Button
                        id="login"
                        disabled={false}
                        data-testid="login"
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={onTestSubmit}
                    >
                        {"로그인"}
                    </Button>
                </form>

              <Link to= "/signUp" style = {{}}>회원가입</Link>
            </div>
        }
    </>
);

}
export default Login