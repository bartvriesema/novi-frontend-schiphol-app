import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="flights" element={<Flights />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
