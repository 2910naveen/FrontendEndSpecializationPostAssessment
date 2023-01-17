import logo from './logo.svg';
import './App.css';
import CreateUser from './Components/CreateUser';
import ReadUsers from './Components/ReadUsers';
import UpdateUser from './Components/UpdateUser';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import AuthContext from './Components/AuthContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RequiredAuth from './Components/RequiredAuth';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthContext>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateUser/>}></Route>
        <Route path="/readUser" element={<ReadUsers/>}></Route>
        <Route path="/editUser" element={<RequiredAuth><UpdateUser/></RequiredAuth>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </AuthContext>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
