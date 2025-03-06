import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Properties from "./pages/properties";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/properties">Properties</Link>
            </nav>
            <Routes>
                <Route path="/properties" element={<Properties />} />
            </Routes>
        </Router>
    );
}

export default App;
