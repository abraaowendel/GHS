import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import { NotFound } from "../components/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default MainRoutes;