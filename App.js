import { Counter } from "./components/counter";
import HomePage from "./page/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
