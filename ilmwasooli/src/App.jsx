import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import WhoWeAre from "./pages/WhoWeAre";
import Footer from "./components/Footer";
import RequestDemoPage from "./pages/RequestDemo";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/faqs" element={<Faqs />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
