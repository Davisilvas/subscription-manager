import {Outlet} from 'react-router-dom';
import './App.css'

// COMPONENTS IMPORTS
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const users = [];
  
  const createStorage = () => {
      localStorage.setItem('users', JSON.stringify(users));
  }

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
