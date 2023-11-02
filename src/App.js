import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Saved from './pages/Saved';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        {/* <Route path='/saved' element={<Saved />}></Route> */}
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
