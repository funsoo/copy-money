import { useState } from "react";
import { useRecoilValue } from "recoil";
import authProfileState from "../../states/AuthProfileState"
import ComponentsRouters from "./ComponentsRouters";
import LoginRouter from "./LoginRouter";

function MainApp() {

    const authProfile = useRecoilValue( authProfileState );

    return(
    <>
        {authProfile
            ?  
            <ComponentsRouters/>
            :
            <LoginRouter/> 
        }
    </>
    )
}

export default MainApp;