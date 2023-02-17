// libraries
import { Routes, Route } from "react-router-dom";

// pages
import {
  Homepage,
  CeremoniesPage,
  MarriageRenewalPage,
  UnityPage,
  WeddingPage,
  NamingPage,
} from "./pages";

// components
import { Navbar, ScrollToTop } from "./components";

// styles
import "./App.css";
import "./normalize.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="ceremonies" element={<CeremoniesPage />} />
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="renewal" element={<MarriageRenewalPage />} />
          <Route path="unity" element={<UnityPage />} />
          <Route path="naming" element={<NamingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
