import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile";
import Login from "./pages/sesion/Login";
import Prubas from "./pages/home/Prubas";
import ScrollToTop from "./help/ScrollToTop";
import GenericPageE from "./models-3d/liver_cancer/common/pages/experiment/GenericPageE";
import VerifyPage from "./pages/sesion/VerifyPage";
import Quiz from "./pages/Quiz/Quiz";
import NabBar from "./layout/header/NavBar";
import Footer from "./layout/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={
            <>
            <NabBar/>
            <Home />
            <Footer/>
            </>
            
            } />
          <Route path="/login" element={
            <>
            <NabBar/>
            <Login />
            <Footer/>
            </>
            
            } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prubas" element={<Prubas />} />
          <Route path="/cancer" element={
            <>
             <NabBar/>
              <div className="pt-20" >
              <GenericPageE page='cancer'/>
            </div>
             
            </>
            
            } />
          <Route path="/symptoms" element={
            <>
            <NabBar/>
            <div className="pt-20" >
              <GenericPageE page='symptoms'/>
            </div>
            
            
            </>
            } />
          <Route path="/treatment" element={
            <>
            <NabBar/>
            <div className="pt-20" >
              <GenericPageE page='treatment'/>
            </div>
            
            </>
            } />
          <Route path="/recomendations" element={
            <>
            <NabBar/>
            <div className="pt-20" >
              <GenericPageE page='recomendations'/>
            </div>
            </>

            
            } />
          <Route path="/verifyEmail" element={
            <>
            <NabBar/>
            <VerifyPage/>
            <Footer/>
            </>
            } />
          <Route path="/quiz" element={
            <>
            <NabBar/>
            <div className="pt-20" >
              <Quiz />
            </div>
            
            </>
            
            } />

    
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
