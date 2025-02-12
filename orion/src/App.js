import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import WritersHome from './components/writers/WritersHome';

import WriterLvl1 from './components/writers/WriterLvl1';
import WriterLvl2 from './components/writers/WriterLvl2';
import WriterLvl3 from './components/writers/WriterLvl3';
import Task1 from './components/writers/Task1';
import Task2 from './components/writers/Task2';
import Task3 from './components/writers/Task3';
import Task4 from './components/writers/Task4';
import Task5 from './components/writers/Task5';
import Task21 from './components/writers/Task21';
import Task22 from './components/writers/Task22';
import Task23 from './components/writers/Task23';
import Task24 from './components/writers/Task24';
import Task25 from './components/writers/Task25';
import Task31 from './components/writers/Task31';
import Task32 from './components/writers/Task32';
import Task33 from './components/writers/Task33';
import Task34 from './components/writers/Task34';
import Task35 from './components/writers/Task35';


import Artist from './components/Artists/Artist';  
import ArtistLvl1 from './components/Artists/ArtistLvl1';
import TaskA1 from './components/Artists/TaskA1';
import TaskA2 from './components/Artists/TaskA2';
import TaskA3 from './components/Artists/TaskA3';
import TaskA4 from './components/Artists/TaskA4';
import TaskA5 from './components/Artists/TaskA5';
import ArtistLvl2 from './components/Artists/ArtistLvl2';
import TaskA21 from './components/Artists/TaskA21';
import TaskA22 from './components/Artists/TaskA22';
import TaskA23 from './components/Artists/TaskA23';
import TaskA24 from './components/Artists/TaskA24';
import TaskA25 from './components/Artists/TaskA25';
import ArtistLvl3 from './components/Artists/ArtistLvl3';
import TaskA31 from './components/Artists/TaskA31';
import TaskA32 from './components/Artists/TaskA32';
import TaskA33 from './components/Artists/TaskA33';
import TaskA34 from './components/Artists/TaskA34';
import TaskA35 from './components/Artists/TaskA35';


import Musician from './components/Musicians/Musician';
import MusicianLvl1 from './components/Musicians/MusicianLvl1';
import CodersHome from './components/coders/CodersHome';
import CodersLvl1 from './components/coders/CodersLvl1';
import Login from './components/Login';   
import Register from './components/Register';  
import Hello from './components/Hello';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/leaderboard';
import Tutorials from './components/Tutorials';




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
        <Routes>
          {/* Conditionally render Navbar except for Login page */}
          <Route 
            path="/*" 
            element={
              <>
                <AppRoutes/>
              </>
            } 
          />
          <Route path="/Hello" element={<Hello />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Hello />} />
      <Route path="/home" element={<Home />} />
      <Route path="/writer" element={<WritersHome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/Tutorials" element={<Tutorials Tutorials/>} />
      <Route path="/WriterLvl1" element={<WriterLvl1 />} />
      <Route path="/artists" element={<Artist />} />
      <Route path="/ArtistLvl1" element={<ArtistLvl1 />} />
      <Route path="/ArtistLvl2" element={<ArtistLvl2 />} />
      <Route path="/ArtistLvl3" element={<ArtistLvl3 />} />
      
      
      <Route path="/TaskA1" element={<TaskA1 />} />
      <Route path="/TaskA2" element={<TaskA2 />} /> 
      <Route path="/TaskA3" element={<TaskA3 />} />
      <Route path="/TaskA4" element={<TaskA4 />} />
      <Route path="/TaskA5" element={<TaskA5 />} />

      <Route path="/TaskA21" element={<TaskA21 />} />
      <Route path="/TaskA22" element={<TaskA22 />} />
      <Route path="/TaskA23" element={<TaskA23 />} />
      <Route path="/TaskA24" element={<TaskA24 />} />
      <Route path="/TaskA25" element={<TaskA25 />} />

      <Route path="/TaskA31" element={<TaskA31 />} />
      <Route path="/TaskA32" element={<TaskA32 />} />
      <Route path="/TaskA33" element={<TaskA33 />} />
      <Route path="/TaskA34" element={<TaskA34 />} />
      <Route path="/TaskA35" element={<TaskA35 />} />


      <Route path="/musician" element={<Musician />} />
      <Route path="/MusicianLvl1" element={<MusicianLvl1 />} />
      <Route path="/coders" element={<CodersHome />} />
      <Route path="/CodersLvl1" element={<CodersLvl1 />} />

      <Route path="/WriterLvl2" element={<WriterLvl2 />} />
      <Route path="/WriterLvl3" element={<WriterLvl3 />} />
      <Route path="/Task1" element={<Task1 />} />
      <Route path="/Task2" element={<Task2 />} />
      <Route path="/Task3" element={<Task3 />} />
      <Route path="/Task4" element={<Task4 />} />
      <Route path="/Task5" element={<Task5 />} />
      <Route path="/Task21" element={<Task21 />} />
      <Route path="/Task22" element={<Task22 />} />
      <Route path="/Task23" element={<Task23 />} />
      <Route path="/Task24" element={<Task24 />} />
      <Route path="/Task25" element={<Task25 />} />
      <Route path="/Task31" element={<Task31 />} />
      <Route path="/Task32" element={<Task32 />} />
      <Route path="/Task33" element={<Task33 />} />
      <Route path="/Task34" element={<Task34 />} />
      <Route path="/Task35" element={<Task35 />} />

 
      <Route path="/TaskA1" element={<TaskA1 />} />
      <Route path="/TaskA2" element={<TaskA2 />} />
      <Route path="/TaskA3" element={<TaskA3 />} />
      <Route path="/TaskA4" element={<TaskA4 />} />
      <Route path="/TaskA5" element={<TaskA5 />} />




    </Routes>
  );
};

export default App;