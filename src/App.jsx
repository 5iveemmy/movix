import GlobalStyle from "./globalStyles";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
import { AuthProvider } from "./auth/AuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./auth/Firebase";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
