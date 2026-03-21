import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, lazy, Suspense } from "react";

import FloatingSocialMenu from "./components/FloatingSocialMenu";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Detail Pages remain lazy loaded
const ElevationWork = lazy(() => import("./pages/services/ElevationWork"));
const AluminiumPartition = lazy(() => import("./pages/services/AluminiumPartition"));
const AluminiumWindows = lazy(() => import("./pages/services/AluminiumWindows"));
const SteelFabrication = lazy(() => import("./pages/services/SteelFabrication"));
const SSWorks = lazy(() => import("./pages/services/SSWorks"));
const MSWorks = lazy(() => import("./pages/services/MSWorks"));
const GeneralFabrication = lazy(() => import("./pages/services/GeneralFabrication"));
const RoofingWork = lazy(() => import("./pages/services/RoofingWork"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-slate-950"><div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Detail Routes */}
          <Route path="/services/elevation-work" element={<ElevationWork />} />
          <Route path="/services/aluminium-partition" element={<AluminiumPartition />} />
          <Route path="/services/aluminium-windows" element={<AluminiumWindows />} />
          <Route path="/services/steel-fabrication" element={<SteelFabrication />} />
          <Route path="/services/ss-works" element={<SSWorks />} />
          <Route path="/services/ms-works" element={<MSWorks />} />
          <Route path="/services/general-fabrication" element={<GeneralFabrication />} />
          <Route path="/services/roofing-work" element={<RoofingWork />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {pathname !== "/" && <Footer />}
      <FloatingSocialMenu />
    </>
  );
};

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AppLayout />
  </BrowserRouter>
);

export default App;