import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Content from './pages/Content';
import AboutUs from './pages/AboutUs';
import Company from './pages/Company';
import TrackOrder from './pages/TrackOrder';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Content />} />
          <Route path="initial" element={<Content />} />
        </Route>

        <Route path="aboutUs" element={<AboutUs />} />

        <Route path="company" element={<Company />} />

        <Route path="trackOrder" element={<TrackOrder />} />

        <Route path="contactUs" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;