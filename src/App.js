import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import history from "./history";

// layout
import Layout from "./components/Layout";
// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Store from "./pages/Store";
import CardDetails from "./pages/CardDetails";
import Checkout from "./pages/Checkout";
import TermsOfSales from "./pages/TermsOfSales";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {}, [user]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home /> : <Login />} />
          <Route path="store" element={user ? <Store /> : <Login />} />
          <Route
            path="card-details/:id"
            element={user ? <CardDetails /> : <Login />}
          />
          <Route
            path="checkout"
            element={user ? <Checkout /> : <Login />}
          ></Route>
          <Route path="terms-of-sales" element={<TermsOfSales />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
