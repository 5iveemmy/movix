import GlobalStyle from "./globalStyles";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
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
        </Provider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
