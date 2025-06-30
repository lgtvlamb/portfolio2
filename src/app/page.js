'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaCog, FaHome, FaUser, FaServicestack, FaBriefcase, FaNewspaper, FaEnvelope, FaSlidersH } from './components/icons';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

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
