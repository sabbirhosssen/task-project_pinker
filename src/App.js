import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import Header from './Components/page/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
    
      
      
    </div>
  );
}

export default App;
