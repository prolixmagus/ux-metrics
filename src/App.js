import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Outcomes from "./pages/Outcomes";
import Teams from "./pages/Teams";
import Topics from "./pages/Topics";

import Cohort5 from "./pages/Cohort5";
import Cohort5Schedule from "./pages/Cohort5Schedule";
import Cohort6 from "./pages/Cohort6";
import Cohort6Schedule from "./pages/Cohort6Schedule";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the routes for each page */}
                <Route path="/" element={<Home />} />
                <Route path="/outcomes" element={<Outcomes />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/topics" element={<Topics />} />

                <Route path="/cohort5" element={<Cohort5 />} />
                <Route path="/cohort5-schedule" element={<Cohort5Schedule />} />

                <Route path="/cohort6" element={<Cohort6 />} />
                <Route path="/cohort6-schedule" element={<Cohort6Schedule />} />

                {/* UPDATE THIS */}
                {/* UPDATE THIS */}
                {/* <Route path="/cohort6" element={<Cohort6 />} />
                <Route 
                    path="/cohort6-schedule" 
                    element={<Cohort6Schedule />} 
                /> */}
                {/* UPDATE THIS */}
                {/* UPDATE THIS */}
            </Routes>
        </Router>
    );
}

export default App;
