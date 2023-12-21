import { SlideBar } from "../components/SlideBar/Index";
import { Outlet } from "react-router-dom";


export function Home(){

  return(
    <div className="bg-blackCustum02 flex w-screen h-screen">
      <SlideBar/>
      <Outlet/>
      
    </div>
  )
}