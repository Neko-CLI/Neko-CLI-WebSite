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
import Reviews from './pages/reviews/reviews';
import PrivacyPolicy from './pages/privacy/privacy';
import TermsOfServices from './pages/tos/tos';
import CookieConsentBanner from './pages/components/cookiesbanner';
import AnalyticsLogs from './pages/components/alogs';

const GA_MEASUREMENT_ID = 'G-337952744';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState({ page: pages[0].title, link: pages[0].links[0] });

  const [hasCookieConsent, setHasCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (consent === 'true') {
      setHasCookieConsent(true);
    } else {
      setHasCookieConsent(false);
    }

    const match = location.pathname.match(/^\/docs\/([^/]+)\/([^/]+)$/);
    if (match) {
      // eslint-disable-next-line no-unused-vars
      const [_, page, link] = match;

      const matchedPage = pages.find(p => p.title.replaceAll(" ", "-").toLowerCase() === page.toLowerCase());
      const matchedLink = matchedPage?.links.find(l => l.replaceAll(" ", "-").toLowerCase() === link.toLowerCase());

      if (matchedPage && matchedLink) {
        setSelectedLink({ page: matchedPage.title, link: matchedLink.replaceAll(" ", "_") });
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    if (hasCookieConsent && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-337952744') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
          'anonymize_ip': true,
          'page_path': location.pathname + location.search
        });

        gtag('event', 'page_view', {
          'page_location': window.location.href,
          'page_path': location.pathname + location.search,
          'page_title': document.title,
          'send_to': GA_MEASUREMENT_ID
        });
      };

      return () => {
        if (script && document.head.contains(script)) {
          document.head.removeChild(script);
          delete window.gtag;
          delete window.dataLayer;
        }
      };
    }
  }, [hasCookieConsent, location.pathname, location.search]);

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
          <div className={`${location.pathname.startsWith('/reviews') ? 'block' : 'hidden overflow-hidden max-h-full'} absolute w-full`}>
            <Reviews />
          </div>
          <div className={`${location.pathname.startsWith('/privacy') ? 'block' : 'hidden overflow-hidden max-h-full'} absolute w-full`}>
            <PrivacyPolicy />
          </div>
          <div className={`${location.pathname.startsWith('/tos') ? 'block' : 'hidden overflow-hidden max-h-full'} absolute w-full`}>
            <TermsOfServices />
          </div>
        </div>
        <AnalyticsLogs />
        <CookieConsentBanner />
      </KBarProvider>
    </NextUIProvider>
  );
}

export default App;