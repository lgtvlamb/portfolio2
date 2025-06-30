'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaCog, FaHome, FaUser, FaServicestack, FaBriefcase, FaNewspaper, FaEnvelope, FaSlidersH } from 'react-icons/fa';

function LeftSection() {
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

function RightSection() {
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

export default function Home() {
  return (
    <Container fluid style={{ margin: 0, padding: 0, position: 'relative' }}>
      <a href="/quote/settings" style={{ position: 'absolute', top: 18, right: 24, color: '#bdbdbd', fontSize: '1.3rem', zIndex: 10, background: '#23272f', borderRadius: '50%', padding: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <FaCog />
      </a>
      <Row style={{ margin: 0, padding: 0 }}>
        <Col xs={12} md={4} style={{ padding: 0 }}>
          <LeftSection />
        </Col>
        <Col xs={12} md={8} style={{ padding: 0 }}>
          <RightSection />
        </Col>
      </Row>
    </Container>
  );
}
