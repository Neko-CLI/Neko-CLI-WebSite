import './App.css';
import { useNavigate, useHref, useLocation } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from './pages/components/navbar/navbar';
import Particles from './pages/components/particles';
import Home from './pages/home/home';
import Docs from './pages/docs/docs';
import Kbar from './pages/components/kbar';
import { useEffect, useState } from 'react';
import { pages } from './pages/docs/pages/pages';
import { KBarProvider } from 'kbar';

import { actions } from './pages/components/kbar';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState({ page: pages[0].title, link: pages[0].links[0] });

  useEffect(() => {
    const match = location.pathname.match(/^\/docs\/([^/]+)\/([^/]+)$/);
    if (match) {
      const [_, page, link] = match;

      const matchedPage = pages.find(p => p.title.replaceAll(" ", "-").toLowerCase() === page.toLowerCase());
      const matchedLink = matchedPage?.links.find(l => l.replaceAll(" ", "-").toLowerCase() === link.toLowerCase());

      if (matchedPage && matchedLink) {
        setSelectedLink({ page: matchedPage.title, link: matchedLink.replaceAll(" ", "_") });
      }
    }
  }, []);

  return (
    <NextUIProvider navigate={navigate} useHref={useHref} className="overflow-auto h-[100vh] appContainer">
      <KBarProvider
        actions={actions}
        options={
          {
            disableScrollbarManagement: true,
            enableHistory: true,
          }
        }>
        <Kbar setSelectedLink={setSelectedLink} />
        <Particles
          className="fixed inset-0 z-[0]"
          quantity={100}
          ease={80}
          color='#fff'
          refresh
          size={1}
        />
        <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        <div className='relative'>
          <div className={`${location.pathname === '/' ? 'block' : 'hidden overflow-hidden max-h-full'} absolute w-full`}>
            <Home />
          </div>
          <div className={`${location.pathname.startsWith('/docs') ? 'block' : 'hidden overflow-hidden max-h-full'} absolute w-full`}>
            <Docs selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          </div>
        </div>
      </KBarProvider>
    </NextUIProvider>
  );
}

export default App;