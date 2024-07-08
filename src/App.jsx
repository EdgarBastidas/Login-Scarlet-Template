import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Recover from "./components/Recover";

function App() {
  return (
    <Router>
      <div className="sm:bg-gradient-to-r from-pink-900 via-fucsia to-purple-700 h-screen flex items-center justify-center">
        <div className="bg-white relative w-full sm:w-auto h-screen sm:h-auto shadow-2xl rounded-[30px] p-8">
          <Routes>
            <Route path="/Login-Scarlet-Template" element={<Login />} />
            <Route path="Login-Scarlet-Template/register" element={<Register />} />
            <Route path="Login-Scarlet-Template/recover" element={<Recover />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
