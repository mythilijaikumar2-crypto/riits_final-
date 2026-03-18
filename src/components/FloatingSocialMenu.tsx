import { useState, useRef, useEffect } from "react";
import { Share2, Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl, getMailtoLink } from "../config/contact";
import "./FloatingSocialMenu.css";

const FloatingSocialMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsActive(false), 3000);
  };

  // Close when clicking outside to ensure works well on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="button-container"
      ref={containerRef}
      className={isActive ? "active" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsActive(!isActive)}
    >
      <a
        href={CONTACT_DETAILS.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn btn-fb"
        title="Facebook"
        onClick={(e) => { e.stopPropagation(); setIsActive(false); }}
      >
        <Facebook size={22} fill="currentColor" strokeWidth={0} />
      </a>
      <a
        href={CONTACT_DETAILS.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn btn-ig"
        title="Instagram"
        onClick={(e) => { e.stopPropagation(); setIsActive(false); }}
      >
        <Instagram size={24} />
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn btn-wa"
        title="WhatsApp"
        onClick={(e) => { e.stopPropagation(); setIsActive(false); }}
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={getMailtoLink()}
        className="social-btn btn-mail"
        title="Mail"
        onClick={(e) => { e.stopPropagation(); setIsActive(false); }}
      >
        <Mail size={22} />
      </a>
      <a
        href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
        className="social-btn btn-call"
        title="Call"
        onClick={(e) => { e.stopPropagation(); setIsActive(false); }}
      >
        <Phone size={22} />
      </a>

      <div className="btn-share">
        <Share2 size={24} />
      </div>
    </div>
  );
};

export default FloatingSocialMenu;
