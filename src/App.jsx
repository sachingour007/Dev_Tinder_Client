import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import {
  Profile,
  Feed,
  Login,
  Homepage,
  Body,
  LoginSingupWrapper,
  Singup,
  AllConnections,
} from "./index";
import AllRequest from "./components/AllRequest";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<LoginSingupWrapper />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/singup" element={<LoginSingupWrapper />}>
              <Route index element={<Singup />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<AllConnections />} />
            <Route path="/requests" element={<AllRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
