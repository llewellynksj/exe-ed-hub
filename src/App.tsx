import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import Homepage from "./pages/Homepage";
import RegisterForm from "./pages/auth/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
