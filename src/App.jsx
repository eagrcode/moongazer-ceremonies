// libraries
import { Routes, Route } from "react-router-dom";

// pages
import { Homepage, CeremoniesPage, WeddingPage, MarriageRenewalPage, UnityPage } from "./pages";

// components
import { Navbar } from "./components";

// styles
import "./App.css";
import "./normalize.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="ceremonies" element={<CeremoniesPage />}>
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="renewal" element={<MarriageRenewalPage />} />
          <Route path="unity" element={<UnityPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
