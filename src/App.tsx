import { Routes, Route, useLocation } from "react-router-dom";

import { Dashboard, SplashScreen } from "./pages";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<h1>Not Found...</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
