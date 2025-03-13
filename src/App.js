import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/signup/login';
import Password from './components/signup/password'
import Starter from './components/signup/home'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starter/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/password" element={<Password/>}/>
      </Routes>
    </Router>
  );
}

export default App;
