import { BrowserRouter, Route, Routes } from "react-router-dom";
import Necklaces from "./pages/Necklaces";
import Home from "./pages/Home";
import TextSlider from "./layout/TextSlider";
import Footer from "./layout/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import Earrings from "./pages/Earrings";
import Anklets from "./pages/Anklets";
import Chains from "./pages/Chains";
import Others from "./pages/Others";
import Cart from "./pages/Cart";
import ScrollToTop from "./layout/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BuildYourOwn from "./pages/BuildYourOwn";
import JewelleryAdminPage from "./pages/JewelleryAdminPage";
import AdminLogin from "./pages/AdminLogin";
import JewellaryDetail from "./pages/JewelaryDetails";
import Admin from "./pages/Admin";
import Layout from "./layout/Layout";

function App() {
  const mockCart = [
  { name: "Elegant Earrings", price: 899, quantity: 2, image: "/earrings.jpg" },
  { name: "Gold Necklace", price: 2499, quantity: 1, image: "/necklace.jpg" },
];
  return (
    <BrowserRouter>
      <LoaderProvider>
        <TextSlider />
        <Layout/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Necklaces />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/anklets" element={<Anklets />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/others" element={<Others />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/:id" element={<JewellaryDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/build-your-own" element={<BuildYourOwn  />} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
        <Footer />
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
