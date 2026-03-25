import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './PremiumServiceCards.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  p1: React.ReactNode;
  p2: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, p1, p2 }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={targetRef} 
      className={`premium-card-container ${isIntersecting ? 'is-visible' : ''}`}
    >
      <div className="card-content">
        {/* -- BACK OF CARD -- */}
        <div className="card-back">
          <div className="card-back-content">
            <div className="back-text-content">
              {p2}
            </div>
          </div>
        </div>

        {/* -- FRONT OF CARD -- */}
        <div className="card-front">
          <div className="card-img-bg">
            <div className="anim-circle"></div>
            <div className="anim-circle" id="anim-right"></div>
            <div className="anim-circle" id="anim-bottom"></div>
          </div>

          <div className="card-front-content">
            <small className="card-badge">{icon}</small>
            
            <div className="card-description">
              <div className="card-title-row">
                <p className="card-title-text">
                  <strong>{title}</strong>
                </p>
                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="card-p1-text">
                {p1}
              </div>
            </div>
          </div>
        </div>
      </div>
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
          residential and commercial building. Our <strong>window grills</strong> and 
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
