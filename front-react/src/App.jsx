import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomeLayout.jsx";
import Galery from "./pages/Galery.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/gallery" element={<Galery />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
