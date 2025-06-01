import './App.css';
import { useNavigate, useHref, useLocation } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from './pages/components/navbar/navbar';
import Particles from './pages/components/particles';
import Home from './pages/home/home';
import Docs from './pages/docs/docs';
import Kbar from './src/App';
import Reviews from './src/pages/reviews/reviews';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref} className="overflow-auto h-[100vh]">
      <Kbar />
      <Particles
        className="fixed inset-0 z-[-1]"
        quantity={100}
        ease={80}
        color='#fff'
        refresh
        size={1}
      />
      <NavBar />
      <div className='relative'>
        <div className={`${location.pathname === '/' ? 'opacity-100' : 'opacity-0 z-[-1] overflow-hidden'} transition-all absolute w-full`}><Home /></div>
        <div className={`${location.pathname.startsWith('/docs') ? 'opacity-100' : 'opacity-0 z-[-1] overflow-hidden'} transition-all absolute w-full`}><Docs /></div>
        <div className={`${location.pathname.startsWith('/reviews') ? 'opacity-100' : 'opacity-0 z-[-1] overflow-hidden'} transition-all absolute w-full`}><Reviews /></div>
      </div>
    </NextUIProvider>
  );
}

export default App;