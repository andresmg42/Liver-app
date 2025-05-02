import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile";
import Login from "./pages/sesion/Login";
import Prubas from "./pages/home/Prubas";
import ScrollToTop from "./help/ScrollToTop";
import GenericPage from "./GenericPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prubas" element={<Prubas />} />
          <Route path="/cancer" element={<GenericPage page="cancer" />} />
          <Route path="/symptoms" element={<GenericPage page="symptoms" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
