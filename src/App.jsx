// libraries
import { Routes, Route } from "react-router-dom";

// pages
import { Homepage } from "./pages";

// components
import { Navbar } from "./components";

// CSS
import "./App.css";
import "./normalize.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
