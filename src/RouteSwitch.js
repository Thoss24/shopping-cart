import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Products from "./Products";
import Contacts from "./Contacts";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="products" element={<Products />}/>
            <Route path="contacts" element={<Contacts />}/>
        </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;