import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/" || "*"} element={<Home />} />
        <Route path={"/403"} element={<Forbidden />} />
        <Route path={"/404"} element={<NotFound />} />
        <Route path={`/:user`} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
