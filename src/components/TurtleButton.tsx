import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/25",
        secondary: "bg-secondary text-secondary-foreground hover:shadow-xl hover:shadow-secondary/25",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        whatsapp: "bg-[hsl(142,70%,30%)] text-white hover:shadow-xl hover:shadow-[hsl(142,70%,30%)]/25",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline lowercase bg-transparent p-0 h-auto",
        index_brand: "bg-[hsl(225,73%,35%)] text-white border-2 border-[hsl(225,73%,35%)] shadow-lg hover:shadow-[hsl(225,73%,35%)]/25",
        index_brand_outline: "bg-white text-[hsl(225,73%,35%)] border-2 border-transparent hover:bg-slate-50 hover:text-[hsl(225,73%,35%)]",
        index_brand_shimmer: "bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]",
        premium_shimmer: "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
        premium_outline_shimmer: "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/40 shadow-lg",
        call_now: "bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 animate-call-pulse border-none",
      },
      size: {
        default: "px-8 h-[52px]",
        sm: "px-4 h-[44px] md:h-10 text-xs",
        lg: "px-10 h-[60px] text-base",
        icon: "h-[44px] md:h-12 w-[44px] md:w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface TurtleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  to?: string;
  external?: boolean;
}

export const TurtleButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, TurtleButtonProps>(
  ({ className, variant, size, href, to, external, children, ...props }, ref) => {
    // useNavigate gives client-side routing without needing React Router's Link component
    const navigate = useNavigate();

    // Shimmer sweep across the button on hover
    const shineVariants = {
      initial: { x: "-150%" },
      hover:   { x:  "250%" },
    };

    // Scale + lift on hover, press on tap
    const motionVariants = {
      hover:   { scale: 1.05, y: -2 },
      initial: { scale: 1,    y:  0 },
    };

    // Inner content — shimmer span + children
    const content = (
      <>
        <style>{`
          @keyframes call-pulse {
            0%   { transform: scale(1);    opacity: 1; }
            50%  { transform: scale(1.08); opacity: 0.8; }
            100% { transform: scale(1);    opacity: 1; }
          }
        `}</style>
        <motion.span
          className="absolute inset-0 -skew-x-12 z-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)" }}
          variants={shineVariants}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </>
    );

    const commonMotionProps = {
      className:  cn(buttonVariants({ variant, size, className })),
      whileHover: "hover",
      initial:    "initial",
      animate:    "initial",
      whileTap:   { scale: 0.95 },
      variants:   motionVariants,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    };

    /* ── Internal router link: motion.a + navigate() ── */
    if (to) {
      return (
        <motion.a
          href={to}
          onClick={(e) => { e.preventDefault(); navigate(to); }}
          {...commonMotionProps}
        >
          {content}
        </motion.a>
      );
    }

    /* ── External / plain href ── */
    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...commonMotionProps}
        >
          {content}
        </motion.a>
      );
    }

    /* ── Button ── */
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        {...commonMotionProps}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

TurtleButton.displayName = "TurtleButton";
