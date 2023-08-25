import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/loginpage" element={<LoginPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
