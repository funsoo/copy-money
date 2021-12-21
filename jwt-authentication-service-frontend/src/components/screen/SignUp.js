import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from "react-router";

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

function SignUp(){

    const classes = useStyles ();

    const [signUpData, setSignUpData] = useState({username : "", password : "", email : ""});

    const navigate = useNavigate();

    const onSignUpDataChangeHandler = (e) => {

        setSignUpData((prevSignUpData) => {
        
            return {...prevSignUpData, [e.target.name] : e.target.value};
        
        })
    }

    const onSignUpSubmit = async (e) => {

        e.preventDefault();

        let user = {
            username : signUpData.username,
            password : signUpData.password,
            email : signUpData.email
        }

        let test = await axios.post("http://localhost:8080/signUp",user);

        navigate("/");

    }

    return (
        <>
        {
            <div id="signUpFormContainer">
                <form id="signUpForm" className={classes.root} autoComplete="off" >
                    
                    <TextField

                        id="username"
                        data-testid="username"
                        name="username"
                        label={""}
                        disabled={false}
                        onChange={onSignUpDataChangeHandler}
                        value={signUpData.username || ""}
                        InputLabelProps={{
                            shrink: true
                        }}

                    />
                    <TextField

                        id="password"
                        data-testid="password"
                        name="password"
                        label={""}
                        type="password"
                        disabled={false}
                        onChange={onSignUpDataChangeHandler}
                        value={signUpData.password}
                        InputLabelProps={{
                            shrink: true
                        }}

                    />
                    <TextField

                        id="email"
                        data-testid="email"
                        name="email"
                        label={""}
                        disabled={false}
                        onChange={onSignUpDataChangeHandler}
                        value={signUpData.email}
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
                        onClick={onSignUpSubmit}
                    >
                        {"회원가입"}
                    </Button>
                </form>
            </div>
        }
        </>
    )
}

export default SignUp;