import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer/>
    </>

  )
}