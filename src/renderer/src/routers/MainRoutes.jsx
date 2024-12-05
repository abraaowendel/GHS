import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import { NotFound } from "../components/NotFound";
import Login from "../pages/login/Login";
import Settings from "../pages/settings/Settings";
import Admin from "../pages/admin/Admin";
import Customers from "../pages/customers/Customers";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default MainRoutes;