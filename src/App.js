import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import history from "./history";

import Layout from "./components/Layout";
// Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import CardDetails from "./pages/CardDetails";
import Checkout from "./pages/Checkout";
import TermsOfSales from "./pages/TermsOfSales";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="card-details/:id" element={<CardDetails />} />
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="terms-of-sales" element={<TermsOfSales />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
