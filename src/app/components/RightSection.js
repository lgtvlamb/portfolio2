'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaCog, FaHome, FaUser, FaServicestack, FaBriefcase, FaNewspaper, FaEnvelope, FaSlidersH } from './icons';

export default function RightSection() {
  return (
    <div style={{ background: '#14151a', height: '100vh', width: '100%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <img src={ '/profile.jpeg'} alt="Profile" width={200} height={200} style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', marginRight: '36px', marginLeft: '-50px', border: '4px solid white', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '2px', fontFamily: 'cursive, sans-serif' }}>ANIKET DAIYA</div>
          <div style={{ height: '2.1rem' }} />
          <div style={{ fontSize: '1rem', fontWeight: 'normal', maxWidth: '300px', lineHeight: 1.4 }}>
            Creative Programmer based in India and happy to travel all over Asia to make codes.
          </div>
          <div style={{ height: '2.1rem' }} />
          <div style={{ display: 'flex', gap: '18px', marginTop: 0 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.3rem' }}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.3rem' }}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.3rem' }}>
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.3rem' }}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
