import {} from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import LoginSingupWrapper from "./components/LoginSingupWrapper";
import Singup from "./components/Singup";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginSingupWrapper />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/singup" element={<LoginSingupWrapper />}>
            <Route index element={<Singup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
