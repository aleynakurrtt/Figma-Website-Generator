import { Outlet } from "react-router-dom"
import Navbar from "./sections/Navbar/navbar"
import Footer from "./sections/Footer/footer"




function RootNavLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootNavLayout