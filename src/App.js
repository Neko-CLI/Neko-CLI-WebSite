import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import Particles from './components/particles';
import Footer from './components/footer';

function App() {
  return (
    <NextUIProvider>
      <Particles
        className="fixed inset-0 z-[-1]"
        quantity={100}
        ease={80}
        color='#fff'
        refresh
        size={1}
      />
      <NavBar />
      <Header />
      <Footer />
    </NextUIProvider>
  );
}

export default App;
