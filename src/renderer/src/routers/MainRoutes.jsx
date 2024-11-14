import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import { NotFound } from "../components/NotFound";
import Login from "../pages/login/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default MainRoutes;