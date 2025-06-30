'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaCog, FaHome, FaUser, FaServicestack, FaBriefcase, FaNewspaper, FaEnvelope, FaSlidersH } from './icons';




export default function LeftSection() {
  const items = [
    { name: "Home", icon: <FaHome />, quote: "home" },
    { name: "About", icon: <FaUser />, quote: "about" },
    { name: "Service", icon: <FaServicestack />, quote: "service" },
    { name: "Portfolio", icon: <FaBriefcase />, quote: "portfolio" },
    { name: "News", icon: <FaNewspaper />, quote: "news" },
    { name: "Contact", icon: <FaEnvelope />, quote: "contact" },
  ];
  return (
    <div style={{ background: 'black', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '6rem' }}>
      <div style={{ marginBottom: '10px', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '2px', alignSelf: 'flex-start', paddingLeft: '2.5rem', color: 'white', fontFamily: 'cursive, sans-serif' }}>INDIA</div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '2.5rem' }}>
        {items.map((item, idx) => (
          <a
            key={idx}
            href={`/quote/${item.quote}`}
            style={{
              margin: '7px 0',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '1rem' }}>{item.icon}</span>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
