import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import SignUp from './components/signup/signup';
import Login from './components/signup/login';
import Password from './components/signup/password'
import Starter from './components/signup/home'

// import Sidebar from './components/Students/Sidebar/Sidebar'
// import Dashboard from './components/Students/Dashboard/Dashboard'
// import Profile1 from './components/Students/Profile/Profile1'
// import Library from './components/Students/Library/Library';
// import Courses from './components/Students/Courses/Courses'
// import Circulars from './components/Students/Circulars/Circulars'


// import TSidebar from './components/Teachers/TSidebar/TSidebar'
// import TDashboard from './components/Teachers/TDashboard/TDashboard';
// import TProfile from './components/Teachers/TProfile/TProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starter/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/password" element={<Password/>}/>
        {/* <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Sidebar/>}/>
        <Route path="/" element={<Profile/>}/> */}
      </Routes>
    </Router>

    // <div className='app'>
    //     {/* Students*/}
    //   {/* <Sidebar></Sidebar> */}
    //   {/* <Dashboard></Dashboard>
    //   <Profile1></Profile1> */}
    //   {/* <Calender></Calender> */}
    //   {/* <Library></Library> */}
    //   {/* <Courses></Courses> */}
    //   {/* <Circulars></Circulars> */}

    //   {/* Teachers */}
    //   <TSidebar></TSidebar>
    //   <TDashboard></TDashboard>
    //   <TProfile></TProfile>
    // </div>


    
  );
}

export default App;
