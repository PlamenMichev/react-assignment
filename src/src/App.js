import RegisterPage from './pages/register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/sign-up" element={<RegisterPage />}/>
        </Routes>
    </Router>
  );
}

export default App;