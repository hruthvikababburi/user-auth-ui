import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Signup/>}/>
      </Routes>
     
    </Router>
  );
}

export default App;
