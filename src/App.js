import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutBoard from './Pages/AboutBoard/AboutBoard';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import Colleges from './Pages/Colleges/Colleges';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import School from './Pages/Schools/School';
import Schools from './Pages/Schools/Schools';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/schools' element={<Schools />} />
        <Route path='/schools/:schoolId' element={<School />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/aboutBoard' element={<AboutBoard />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
