import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import history from "./history";
import CardDetails from "./pages/CardDetails";

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="/card-details/:id" element={<CardDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
