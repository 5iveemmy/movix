import GlobalStyle from "./globalStyles";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
