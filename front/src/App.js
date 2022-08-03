import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Texto from './pages/Texto';

//! Css general
import './css/normalize.css';
import './css/responsive.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<Texto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
