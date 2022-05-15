import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SplashScreen } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route path="*" element={<h1>Not Found...</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
