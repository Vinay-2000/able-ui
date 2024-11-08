import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Donate from "./features/Donate";
import Home from "./features/Home";

function App() {
  return (
    <Router>
      <Home />
      {/* <Routes>
        <Route path="/able-ui" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
      </Routes> */}
    </Router>
  );
}

export default App;
