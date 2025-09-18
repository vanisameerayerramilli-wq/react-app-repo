// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Gallery from "./Components/Gallery";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
