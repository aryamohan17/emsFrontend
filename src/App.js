import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import Edit from './components/edit/Edit';
import Pagenf from './components/pagenotfound/Pagenf';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/profile/:id' element ={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Pagenf/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
