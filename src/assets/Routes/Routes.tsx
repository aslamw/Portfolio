import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Home } from "../../Pages/Home";

export const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}