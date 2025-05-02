import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile";
import Login from "./pages/sesion/Login";
import Prubas from "./pages/home/Prubas";
import PageCancerLiver from "./pages/liver/desease/PageCancerLiver";
import ScrollToTop from "./help/ScrollToTop";
import PageSymptomsFever from "./pages/liver/symptoms/PageSymptomsFever";
import PageModel from "./models-3d/liver_cancer/common/pages/PageModel";
import ModelCancerInPage from "./models-3d/liver_cancer/common/ModelCancerInPage";
import CancerText3D from "./models-3d/liver_cancer/common/texts/CancerText3D";
import { LiverCancerFinal } from "./models-3d/liver_cancer/desease/cancer/LiverCancerFinal";

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
          <Route path="/cancerLiver" element={<PageCancerLiver />} />
          <Route path="/symptoms" element={<PageSymptomsFever />} />
          <Route
            path="/genericpage"
            element={
              <PageModel
                modelpage={
                  <ModelCancerInPage
                    text={
                      <CancerText3D
                        title={"LIVER CANCER"}
                        position={[0, 1.5, 0]}
                        color="red"
                      />
                    }
                    model={<LiverCancerFinal scale={2} home={false} />}
                    color="#ff6035"
                  />
                }
                color="#ff6035"
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
