import MainNav from './Components/MainNav'
import Footer from './Components/Footer'
import './index.css'
import Hero from './Pages/Hero/Hero';
import About from './Pages/Hero/About';
import Projects from './Pages/Hero/Projects';


function App() {
  return (
    <div className='pb-2'>
      <MainNav />
      <Hero />
      <br />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
