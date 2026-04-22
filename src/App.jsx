import React, { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { LeadIdentification } from './sections/LeadIdentification';
import { Mechanism } from './sections/Mechanism';
import { Contracts } from './sections/Contracts';
import { InsideProtocol } from './sections/InsideProtocol';
import { TargetAudience } from './sections/TargetAudience';
import { Mentor } from './sections/Mentor';
import { Testimonials } from './sections/Testimonials';
import { OfferAndObjections } from './sections/OfferAndObjections';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    // Handling smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#checkout') { // skip checkout mock URL
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="protocolo-33-app">
      <Hero />
      <LeadIdentification />
      <Mechanism />
      <Contracts />
      <InsideProtocol />
      <TargetAudience />
      <Mentor />
      <Testimonials />
      <OfferAndObjections />
      <Footer />
    </div>
  );
}

export default App;
