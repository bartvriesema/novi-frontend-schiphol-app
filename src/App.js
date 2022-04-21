import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import FlightsPage from "./pages/FlightsPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

library.add(fas, far);

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="flights" element={<FlightsPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
