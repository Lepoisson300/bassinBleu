import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

function App() {
  return (
    <div className="font-sans antialiased text-text-main bg-sand min-h-screen transition-colors duration-500">
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
      <FloatingControls />
    </div>
  );
}

export default App;
