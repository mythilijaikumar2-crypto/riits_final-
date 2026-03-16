import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './PremiumServiceCards.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  p1: React.ReactNode;
  p2: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, p1, p2 }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });
  const [startFloating, setStartFloating] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setStartFloating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]);

  return (
    <div 
      ref={targetRef} 
      className={`premium-card-container ${isIntersecting ? 'is-visible' : ''}`}
    >
      <div className="premium-card-bg" />
      <span className={`premium-card-icon ${startFloating ? 'is-floating' : ''}`}>
        {icon}
      </span>
      <h3 className="premium-card-title">
        {title}
      </h3>
      <div className="premium-card-p1">{p1}</div>
      <div className="premium-card-p2">{p2}</div>
    </div>
  );
};

export const PremiumServiceCards: React.FC = () => {
  const cards = [
    {
      icon: "🚪",
      title: "Gates, Grills & Railings",
      p1: (
        <>
          We fabricate and install <strong>steel gates</strong>, <strong>stainless steel gates</strong>, 
          <strong> MS gates</strong>, <strong>sliding gates</strong> and <strong>compound gates</strong> for 
          residential and commercial properties. Our <strong>window grills</strong> and 
          <strong> steel grills</strong> are precision-cut for exact fitment.
        </>
      ),
      p2: (
        <>
          For safety and aesthetics, we craft <strong>balcony railings</strong>, 
          <strong> stainless steel railings</strong>, <strong>staircase railings</strong> and 
          <strong> steel handrails</strong> using Grade-A SS and MS material.
        </>
      ),
    },
    {
      icon: "🏗️",
      title: "Shutters, Aluminium & Glass",
      p1: (
        <>
          RIITS supplies and installs <strong>rolling shutters</strong>, <strong>shop shutters</strong> and 
          <strong> industrial shutters</strong> built for years of high-frequency use. We're the go-to team for 
          <strong> rolling shutter work near me</strong> across Trichy.
        </>
      ),
      p2: (
        <>
          Our <strong>aluminium work</strong> covers <strong>aluminium doors</strong>, 
          <strong> aluminium sliding windows</strong>, <strong>aluminium partitions</strong>, 
          <strong> toughened glass doors</strong>, <strong>frameless glass doors</strong> and 
          <strong> glass partitions</strong> for modern interiors.
        </>
      ),
    },
    {
      icon: "🏢",
      title: "Cladding & Structural Works",
      p1: (
        <>
          Transform your building's exterior with <strong>ACP cladding panels</strong>, 
          <strong> aluminium cladding panels</strong> and <strong>building facade panels</strong> that are 
          weather-resistant and visually striking.
        </>
      ),
      p2: (
        <>
          For outdoor and structural needs, we install <strong>steel pergolas</strong>, 
          <strong> metal canopies</strong>, <strong>steel staircases</strong> and 
          <strong> metal staircases</strong>. Our structural fabrication team handles large industrial 
          projects across Tamil Nadu.
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {cards.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </div>
  );
};
