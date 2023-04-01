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
  FuneralPage,
  ContactPage,
  SuccessPage,
} from "./pages";

// components
import { Navbar, Footer } from "./components";

// utils
import ScrollToTop from "./utils/ScrollToTop";
import Redirect from "./Redirect";

// styles
import "./App.css";
import "./normalize.css";
import "./fonts.css";

// context
import { useSubmitted } from "./context/SubmittedContext";

function App() {
  const { isSubmitted } = useSubmitted();

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
          <Route path="funeral" element={<FuneralPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="success" element={isSubmitted ? <SuccessPage /> : <Redirect />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
