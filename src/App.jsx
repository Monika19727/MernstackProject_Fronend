import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserLayout from "./Component/Layout/UserLayout";

export default function 
() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>  //routing for userlayout
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
