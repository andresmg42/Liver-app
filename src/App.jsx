import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home'
import Profile from './pages/home/Profile'
import Login from './pages/sesion/Login'




function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
