import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/" || "*"} element={<Home />} />
          <Route path={`/:user`} element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
