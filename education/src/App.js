import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/Board/About";
import Article from "./pages/Board/Article";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/info" element={<About />} />
          <Route path="/progress" element={<Article type="progress" />} />
          <Route path="/done" element={<Article type="done" />} />
          <Route path="/sent" element={<Article type="sent" />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
