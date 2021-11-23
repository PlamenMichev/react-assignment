import RegisterPage from './pages/register';
import UserContext from './context/user-context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import OtpPage from './pages/otp';
import PickUsername from './pages/pick-username';
import HomePage from './pages/home';
import { useState, useEffect } from 'react'
import { getCookie, deleteCookie, addCookie } from './utils/cookies'
import auth from './services/firebase'
import jwtDecode from 'jwt-decode';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
    const logIn = (user, rememberMe) => {
      console.log(rememberMe)
      const expirationDate = new Date();
      // One week or today
      const numberOfDayToAdd = rememberMe ? 7 : 0;
      expirationDate.setDate(expirationDate.getDate() + numberOfDayToAdd);

      addCookie('auth', user.token, expirationDate)
      setLoggedIn(true)
      setUser(user)
    }

  const logOut = () => {
      deleteCookie('auth');
      setLoggedIn(false)
      setUser(null)
  }

  useEffect(() => {
    const token = getCookie('auth');
        
    if (!token) {
        logOut();
        return;
    }

    const user = jwtDecode(token)
    logIn({token, username: user.displayName}, true)
  }, [])

  return (
    <UserContext.Provider value={{
      loggedIn,
      user,
      logIn: logIn,
      logOut: logOut,
  }}>
    <Router>
        <Routes>
          <Route path="/sign-up" element={<RegisterPage />}/>
          <Route path="/otp-page" element={<OtpPage />}/>
          <Route path="/login" element={<RegisterPage isLoginScreen={true} />}/>
          <Route path="/pick-username" element={<PickUsername /> }/>
          <Route path="/" element={ loggedIn ? <HomePage /> : <Navigate to="/sign-up" /> }/>
        </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;