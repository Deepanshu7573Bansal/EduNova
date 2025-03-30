import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Student Components
import Sidebar from './components/students/Sidebar/Sidebar.jsx';
import Calender from './components/students/Calender/Calender.jsx';
import Search from './components/students/events/Search.jsx';
import Messages from './components/students/Messages/Messages.jsx';
import Dashboard from './components/students/Dashboard/Dashboard.jsx';
import Profile1 from './components/students/Profile/Profile1.jsx';
import Library from './components/students/Library/Library.jsx';
import Courses from './components/students/Courses/Courses.jsx';
import Circulars from './components/students/Circulars/Circulars.jsx';

// Teacher Components
import TSidebar from './components/Teachers/TSidebar/TSidebar';
import TDashboard from './components/Teachers/TDashboard/TDashboard';
import TProfile from './components/Teachers/TProfile/TProfile';

// Auth Components
import SignUp from './components/signup/signup';
import Login from './components/signup/login';
import Password from './components/signup/password';
import Starter from './components/signup/home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // 'student' or 'teacher'

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Starter />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUserType={setUserType} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/password" element={<Password />} />

        {/* Student Routes */}
        <Route 
          path="/student/*" 
          element={
            <div className='app' style={{display:"flex", height:"100vh", background: "linear-gradient(to bottom, #cbdcde, #ffffff)"}}>
              <Sidebar />
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="messages" element={<Messages />} />
                <Route path="calendar" element={<Calender />} />
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<Profile1 />} />
                <Route path="library" element={<Library />} />
                <Route path="courses" element={<Courses />} />
                <Route path="circulars" element={<Circulars />} />
              </Routes>
            </div>
          }
        />

        {/* Teacher Routes */}
        <Route 
          path="/teacher/*" 
          element={
            <div className='app' style={{display:"flex", height:"100vh", background: "linear-gradient(to bottom, #cbdcde, #ffffff)"}}>
              <TSidebar />
              <Routes>
                <Route path="dashboard" element={<TDashboard />} />
                <Route path="profile" element={<TProfile />} />
                {/* Add more teacher routes as needed */}
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;