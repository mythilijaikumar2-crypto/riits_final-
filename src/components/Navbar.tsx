import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { TurtleButton } from "./TurtleButton";
import { CONTACT_DETAILS, formatTelLink, COMPANY_NAME, LOGO_EMBLEM, BRAND_NAME } from "../config/contact";
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
      z-[999] 
      transition-all duration-500
      ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5"
            : "bg-card/90 backdrop-blur-md border-b border-border"
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
        px-2 sm:px-3 lg:px-5 xl:px-6   /* horizontal spacing */
        w-full
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
            w-[220px]                 /* FIXED WIDTH (prevents layout shift) */
            h-[80px] 
            md:w-[320px]                 /* FIXED WIDTH (prevents layout shift) */
            md:h-[100px]                 /* FIXED HEIGHT */
            flex items-center
            lg:hidden                 /* only mobile */
            overflow-hidden           /* hide overflow */
          "
            >
              <motion.img
                src={MOBILE_LOGO}
                alt={`${BRAND_NAME} Mobile Logo`}
                className="
              absolute 
              left-7
              -translate-y-1/2        /* vertical center */
              h-[180px]  
              md:h-[20px]               /* increase size freely */
              w-auto 
              object-contain 
              origin-left
            "
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* ========================= DESKTOP LOGO ========================= */}
            <div
              className="
            relative 
            w-[260px]                /* FIXED WIDTH (KEY FIX) */
            h-[100px]                 /* FIXED HEIGHT */
            hidden lg:flex           /* only desktop */
            items-center
            overflow-hidden
          "
            >
              <motion.img
                src={LOGO_EMBLEM}
                alt={`${BRAND_NAME} Desktop Logo`}
                className="
              absolute 
              left-16 mt-3 
              -translate-y-1/2
              h-[135px]              /* BIG logo without affecting layout */
              w-auto 
              object-contain 
              origin-left
            "
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.4 }}
              />
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
              className="rounded-xl px-5"
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
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span key="open">
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

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
            bg-white/95 
            backdrop-blur-xl 
            border-t 
            border-border/60
          "
            >
              <div className="flex flex-col gap-1 p-4 pb-6">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.to;

                  return (
                    <motion.div key={link.to} custom={i} variants={mobileItemVariants}>
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`
                      flex items-center gap-3 
                      font-heading text-sm uppercase tracking-wider font-bold 
                      py-3 px-4 rounded-xl 
                      transition-all duration-200
                      ${isActive
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted text-[#2d2d2d] hover:text-primary border-l-4 border-transparent"
                          }
                    `}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-3">
                  <TurtleButton
                    href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                    variant="call_now"
                    size="sm"
                    className="w-full rounded-xl"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </TurtleButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
};

export default Navbar;
