import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { TurtleButton } from "./TurtleButton";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl } from "../config/contact";

interface ContactButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "call_now" | "ghost" | "link";
  showIcon?: boolean;
}

export const CallButton: React.FC<ContactButtonProps & { phone?: string; label?: string }> = ({
  className = "",
  variant = "call_now",
  showIcon = true,
  phone = CONTACT_DETAILS.primaryPhone.value,
  label,
}) => (
  <TurtleButton
    href={formatTelLink(phone)}
    variant={variant}
    className={className}
  >
    {showIcon && <Phone className="w-4 h-4" />}
    {label || `Call ${phone === CONTACT_DETAILS.primaryPhone.value ? CONTACT_DETAILS.primaryPhone.display : phone}`}
  </TurtleButton>
);

export const WhatsAppButton: React.FC<ContactButtonProps & { number?: string; label?: string }> = ({
  className = "",
  variant = "whatsapp",
  showIcon = true,
  number = CONTACT_DETAILS.whatsapp.number,
  label = "WhatsApp",
}) => (
  <TurtleButton
    href={getWhatsAppUrl(number)}
    variant={variant}
    external
    className={className}
  >
    {showIcon && <MessageCircle className="w-4 h-4" />}
    {label}
  </TurtleButton>
);

export const ContactInfo: React.FC<{ icon?: React.ReactNode; label: string; value: string; href?: string }> = ({
  icon,
  label,
  value,
  href,
}) => {
  const content = (
    <>
      {icon}
      <div>
        <div className="text-xs uppercase tracking-wider opacity-60 font-bold">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 hover:text-blue-600 transition-colors">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
};
