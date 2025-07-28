import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Materials from "./pages/Materials";
import Clients from "./pages/Clients";
import Inventory from "./pages/Inventory";
import NotFound from "./pages/NotFound";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
