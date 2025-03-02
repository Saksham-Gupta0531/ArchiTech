import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreatePage from "./Components/CreatePage"; 
// import HouseDetail from "./Components/HouseDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePage />} />
                {/* <Route path="/house/:houseType" element={<HouseDetail />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
