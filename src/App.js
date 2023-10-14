import './App.css';
import './Home.css'
import './rangep.css'
import './specialp.css'
import './footer.css'
import './about.css'
import './register.css'
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Product from './components/pages/Product';
import About from './components/pages/About';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes >
      <Route path='/home' element={<Home/>}>home </Route>
      <Route path='/product' element={<Product/>}>product</Route>
      <Route path='/about' element={<About/>}>About</Route>
      <Route path='/registrationform' element={<RegistrationForm/>}>Registration</Route>

    </Routes>
    <Footer />
    </BrowserRouter>
 
    </>
  );
}

export default App;
