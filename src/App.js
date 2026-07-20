import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
<div>


<BrowserRouter>

<Routes>
  <Route path="/" element={  <><Navbar />
  <Home />
  <Skills /><Projects /> <Contact /> <Footer /> </>}></Route>

  <Route path='/contact' element={<Contact />}></Route>

        
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
