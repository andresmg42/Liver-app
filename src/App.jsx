import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile";
import Login from "./pages/sesion/Login";
import Prubas from "./pages/home/Prubas";
import ScrollToTop from "./help/ScrollToTop";
import GenericPageE from "./models-3d/liver_cancer/common/pages/experiment/GenericPageE";
import CancerPage from "./models-3d/liver_cancer/common/pages/experiment/CancerPage";
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
          {/* <Route path="/cancer" element={<GenericPage page="cancer" />} /> */}
          {/* <Route path="/symptoms" element={<GenericPage page="symptoms" />} /> */}
          {/* <Route path="/stagerexp" element={<StagerExperiment />} /> */}
          <Route path="/cancer" element={<GenericPageE page='cancer'/>} />
          <Route path="/symptoms" element={<GenericPageE page='symptoms'/>} />
          <Route path="/genericancer" element={<CancerPage />} />

    
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
