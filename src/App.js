import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";

function App() {
    return (<BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="login" element={<p>Login page</p>}/>
                <Route path="*" element={<p>Nothing to see</p>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
