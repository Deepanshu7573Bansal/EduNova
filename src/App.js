import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/signup/login';
import Password from './components/signup/password'
import Starter from './components/signup/home'
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
