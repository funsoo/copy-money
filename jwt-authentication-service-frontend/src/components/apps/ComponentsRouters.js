import { Routes, Route } from "react-router-dom";
import Main from "../screen/Main";

function ComponentsRouters() {

    return(
        <>
            <Routes>
                <Route path = "/" element = {<Main/>}/> 
            </Routes>
        </>
        )
}

export default ComponentsRouters;