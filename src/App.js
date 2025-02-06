import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import Services from "./pages/services/Services";
import Realisations from "./pages/realisations/Realisations";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Mentions from "./pages/mentions/Mentions";
import ScrollTop from "./components/ScrollTop";
import UserGithub from "./components/UserGithub";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/User" element={<UserGithub />} />
        </Routes>
        <ScrollTop />
      </div>
    </HelmetProvider>
  );
}

export default App;