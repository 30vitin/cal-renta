import React from "react";
import {
    Route,
    Routes
} from "react-router-dom";

import Login from "../components/Login";

import List from "../components/List";
import PersisLogin from "../components/PersisLogin";
import QuotesDetails from "../components/QuotesDetails";
import Rutas from "../components/Rutas";
import Cargos from "../components/Cargos";
import Personalizado from "../components/Personalizado";
import Logout from "../components/Logout";
import CreateNewRegister from "../components/CreateNewRegister";


export default function RouterPaths() {
    return (

        <Routes>
            <Route path="/" element={<Login/>}></Route>

            <Route element={<PersisLogin/>}>


                <Route path={"/list"} element={<List/>}></Route>
                <Route path="/create-new" element={<CreateNewRegister/>}></Route>
                {/*<Route path={"/quotes-details/:guid"} element={<QuotesDetails/>}></Route>
                <Route path={"/quotes-details/routes/:guid"} element={<Rutas/>}/>
                <Route path={"/quotes-details/charges/:guid"} element={<Cargos/>}/>
                <Route path={"/quotes-details/customs-fields/:guid"} element={<Personalizado/>}/>
                <Route path={"/logout"} element={<Logout/>}></Route>*/}

            </Route>


        </Routes>


    );

}
