import RegisterPage from './pages/register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import OtpPage from './pages/otp';
import PickUsername from './pages/pick-username';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/sign-up" element={<RegisterPage />}/>
          <Route path="/otp-page" element={<OtpPage />}/>
          <Route path="/login" element={<RegisterPage />}/>
          <Route path="/pick-username" element={<PickUsername />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
    </Router>
  );
}

export default App;