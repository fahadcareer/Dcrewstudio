import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';

// Lazy loading pages for optimized performance (Lighthouse speed)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Process = lazy(() => import('./pages/Process'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium, minimal gold loading spinner fallback
const PageLoader = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      {/* Golden rotating ring */}
      <div className="w-10 h-10 border-[1.5px] border-secondary/20 border-t-secondary rounded-full animate-spin" />
      <span className="font-sans text-[10px] font-semibold text-secondary tracking-[0.25em] uppercase">
        Loading Space
      </span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </PageLayout>
      </Suspense>
    </Router>
  );
}

export default App;
