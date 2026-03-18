import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { TurtleButton } from "./TurtleButton";
import { CONTACT_DETAILS, formatTelLink, COMPANY_NAME, BRAND_NAME } from "../config/contact";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Work" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20 && !scrolled) setScrolled(true);
    if (latest <= 20 && scrolled) setScrolled(false);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.25, ease: "easeIn" as const },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5"
            : "bg-card/90 backdrop-blur-md border-b border-border"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <div className="container-main flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label={`${COMPANY_NAME} Home`}>
            <motion.div
              className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-black text-lg select-none"
              whileHover={{ rotate: 360, scale: 1.15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              R
            </motion.div>
            <span className="font-heading text-xl lg:text-2xl font-bold tracking-tighter text-primary uppercase flex flex-col leading-none">
              <span className="text-sm font-medium tracking-[0.3em] text-muted-foreground opacity-70">Industrial</span>
              {BRAND_NAME} Metal Craft
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative font-heading text-sm uppercase tracking-wider font-bold transition-colors duration-200 focus:outline-none group"
                  style={{ color: isActive ? "hsl(var(--primary))" : "#2d2d2d" }}
                >
                  {/* Active glow pill */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover underline (non-active) */}
                  {!isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                  )}

                  <motion.span
                    className="relative z-10 block"
                    whileHover={{ y: -1.5, color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              );
            })}

            {/* CTA Button with shimmer */}
            <TurtleButton
                href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}

                variant="call_now"
                size="sm"
                className="rounded-xl px-5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </TurtleButton>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/60 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-4 pb-6">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 font-heading text-sm uppercase tracking-wider font-bold py-3 px-4 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted text-[#2d2d2d] hover:text-primary border-l-4 border-transparent"
                        }`}
                      >
                        {/* Active indicator dot */}
                        {isActive && (
                          <motion.span
                            className="w-2 h-2 rounded-full bg-primary"
                            layoutId="mobile-active-dot"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  custom={navLinks.length}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-3"
                >
                  <TurtleButton
                    href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}

                    variant="call_now"
                    size="sm"
                    className="w-full rounded-xl"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </TurtleButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;