import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

import PetitionCard from "./components/PetitonCard";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/cardtest" element={<PetitionCard />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
