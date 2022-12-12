import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../src/pages/Chat/Chat";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
