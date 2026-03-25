import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { TurtleButton } from "./TurtleButton";
import {
  CONTACT_DETAILS,
  formatTelLink,
  COMPANY_NAME,
  LOGO_EMBLEM,
  BRAND_NAME,
} from "../config/contact";
import MOBILE_LOGO from "../assets/logo/RIITS LOGO CROPPED.png";

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
    hidden: { opacity: 0, scale: 0.97, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" as const },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <>
      {/* ========================= SCROLL PROGRESS BAR ========================= */}
      <motion.div
        className="
      fixed top-0 left-0 
      z-[60] 
      h-[3px] 
      bg-gradient-to-r from-primary via-secondary to-accent 
      origin-left
    "
        style={{ scaleX: scrollYProgress }}
      />

      {/* ========================= NAVBAR ========================= */}
      <motion.nav
        ref={navRef}
        className={` 
          fixed top-0 left-0 right-0 
          z-[99998] 
          h-16 md:h-20
          transition-all duration-500
          ${
            scrolled
              ? "bg-white dark:bg-slate-950 border-b border-border/60 shadow-lg shadow-primary/5"
              : "bg-white dark:bg-slate-950 border-b border-border shadow-sm"
          }
        `}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          width: "100vw",
          maxWidth: "100vw",
          boxSizing: "border-box",
          right: 0,
        }}
      >
        {/* ========================= NAVBAR INNER CONTAINER ========================= */}
        <div
          className="
        flex items-center justify-between 
        px-4 sm:px-6 lg:px-8
        w-full h-full
      "
        >
          {/* ========================= LOGO SECTION ========================= */}
          <Link
            to="/"
            aria-label={`${COMPANY_NAME} Home`}
            className="
          relative flex items-center 
          shrink-0                     /* prevent shrinking */
        "
          >
            {/* ========================= MOBILE LOGO ========================= */}
            <div
              className="
            relative 
            w-auto                     /* FLUID WIDTH */
            max-w-[60vw]               /* Constraint for mobile */
            h-16                       /* Fixed container height */
            flex items-center
            lg:hidden                 /* only mobile */
          "
            >
              <motion.img
                src={MOBILE_LOGO}
                alt={`${BRAND_NAME} Mobile Logo`}
                className="h-12 w-auto object-contain origin-left"
                animate={{ scale: scrolled ? 0.95 : 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* ========================= DESKTOP LOGO ========================= */}
            <div
              className="
            relative 
            w-auto
            max-w-[320px]         /* Increased width for premium impact */
            h-20                  /* Fixed height container - doesn't pull nav */
            hidden lg:flex        /* only desktop */
            items-center
          "
            >
              <div className="relative">
                <motion.img
                  src={LOGO_EMBLEM}
                  alt={`${BRAND_NAME} Desktop Logo`}
                  className="
                relative z-10
                h-28                /* Massive branding */
                w-auto 
                object-contain 
                origin-left
                drop-shadow-sm
              "
                  animate={{ scale: scrolled ? 0.8 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    willChange: "transform",
                    transform: "translateY(4px)" // Subtle offset for visual balance
                  }}
                />
              </div>
            </div>
          </Link>

          {/* ========================= DESKTOP NAVIGATION ========================= */}
          <div
            className="
          hidden lg:flex 
          lg:ml-auto               /* push nav to right */
          items-center 
          justify-end 
          gap-8                    /* spacing between links */
        "
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="
                relative 
                font-heading 
                text-sm 
                uppercase 
                tracking-wider 
                font-bold 
                transition-colors duration-200 
                group
              "
                  style={{
                    color: isActive ? "hsl(var(--primary))" : "#2d2d2d",
                  }}
                >
                  {/* ================= ACTIVE UNDERLINE ================= */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="
                    absolute inset-x-0 -bottom-1 
                    h-[3px] 
                    rounded-full 
                    bg-primary
                  "
                    />
                  )}

                  {/* ================= HOVER UNDERLINE ================= */}
                  {!isActive && (
                    <span
                      className="
                    absolute inset-x-0 -bottom-1 
                    h-[2px] 
                    rounded-full 
                    bg-primary 
                    scale-x-0 
                    group-hover:scale-x-100 
                    transition-transform 
                    duration-300 
                    origin-left
                  "
                    />
                  )}

                  <motion.span
                    className="relative z-10 block"
                    whileHover={{ y: -1.5, color: "hsl(var(--primary))" }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              );
            })}

            {/* ================= CTA BUTTON ================= */}
            <TurtleButton
              href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
              variant="call_now"
              size="sm"
              className="rounded-xl px-5 py-3 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </TurtleButton>
          </div>

          {/* ========================= MOBILE MENU BUTTON ========================= */}
          <motion.button
            className="
          lg:hidden 
          p-2 
          rounded-lg 
          hover:bg-muted 
          transition-colors
        "
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close">
                  <X className="w-6 h-6 text-slate-900 dark:text-white" />
                </motion.span>
              ) : (
                <motion.span key="open">
                  <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* ========================= MOBILE MENU ========================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
                lg:hidden 
                fixed inset-0 
                top-0
                z-[99999]
                bg-white/40
                dark:bg-slate-950/40
                backdrop-blur-3xl
                flex flex-col
              "
          >
            {/* --- Drawer Header --- */}
            <div className="flex items-center justify-center px-5 h-20 border-b border-border/40 relative">
              <img src={MOBILE_LOGO} alt={BRAND_NAME} className="h-10 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 p-2 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-slate-800 dark:text-white" />
              </button>
            </div>

            {/* --- Navigation Links --- */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-3">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;

                return (
                  <motion.div
                    key={link.to}
                    custom={i}
                    variants={mobileItemVariants}
                    className="w-full max-w-[240px]"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`
                          flex items-center justify-center 
                          font-heading text-sm uppercase tracking-widest font-bold 
                          py-3 px-6 rounded-xl border
                          transition-all duration-300
                          ${isActive
                            ? "bg-primary text-white border-primary shadow-lg"
                            : "bg-white/40 dark:bg-slate-900/40 border-white/10 text-slate-900 dark:text-slate-100 hover:bg-white/60 hover:text-primary"
                          }
                        `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
