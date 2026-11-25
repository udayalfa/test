import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TextSlider from "./layout/TextSlider";
import Footer from "./layout/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import Cart from "./pages/Cart";
import ScrollToTop from "./layout/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BuildYourOwn from "./pages/BuildYourOwn";
import JewellaryDetail from "./pages/JewelaryDetails";
import Admin from "./pages/Admin";
import Layout from "./layout/Layout";
import Trophies from "./pages/FibreCups";
import Awards from "./pages/Awards";
import Medals from "./pages/Medals";
import Shields from "./pages/Shields";
import Momentos from "./pages/Mementos";
import Gifts from "./pages/Gifts";
import Sports from "./pages/Sports";
import Economy from "./pages/Economy";

function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <TextSlider />
        <Layout />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cups" element={<Trophies />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/medals" element={<Medals />} />
          <Route path="/shields" element={<Shields />} />
          <Route path="/momentos" element={<Momentos />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/:id" element={<JewellaryDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/build-your-own" element={<BuildYourOwn />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
