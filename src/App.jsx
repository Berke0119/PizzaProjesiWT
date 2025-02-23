import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import Home from "./pages/Home.jsx";
import OrderForm from "./pages/OrderForm.jsx";
import Footer from "./components/Footer.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

export default function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/form' element={<OrderForm/>}/>
          <Route path='/success' element={<OrderSuccess/>}/>
        </Routes>
        <Footer/>
      </Router>

      <ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        theme="dark"
      />
    </>
  );
}
