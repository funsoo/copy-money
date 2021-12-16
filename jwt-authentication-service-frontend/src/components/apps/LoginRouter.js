import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

function LoginRouter() {

    return(
    <>
        <Routes>
            <Route path = "*" element={<Navigate replace to="/login"/>} />
            <Route path = "/signUp" element = {<SignUp/>}/> 
            <Route path = "/login" element = {<Login/>}/> 
        </Routes>
    </>
    )
}

export default LoginRouter;