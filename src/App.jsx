import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";

function App() {
  return (
    <div className="global">
      <Router basename="/MyBlog">
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
