import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="max-w h-screen">
        <Routes>
          <Route path="/" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div style={{ height: "100vh", width: "100vw" }}>
    //   {/* <Model /> */}
    // </div>
  );
}

export default App;
