import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feedback } from "./pages/Feedback";
import { Admin } from "./pages/Admin";
import { Toaster } from "sonner";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Toaster richColors/>
    </BrowserRouter>
  );
}

export default App;
