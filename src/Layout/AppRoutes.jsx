import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";

// import Mediapage from "../Pages/Mediapage";
// import AuthPage from "../Pages/AuthPage";

//  always create and export the component before importing it

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/media" element={<Mediapage />} />
    </Routes>
  );
};

export default AppRoutes;
