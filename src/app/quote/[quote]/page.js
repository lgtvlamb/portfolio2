'use client';
import React from 'react';

export default function QuotePage({ params }) {
  const resolvedParams = typeof React.use === 'function' ? React.use(params) : params;
  const quotes = {
    home: 'Home is opened',
    about: 'About is opened',
    service: 'Service is opened',
    portfolio: 'Portfolio is opened',
    news: 'News is opened',
    contact: 'Contact is opened',
    settings: 'Settings is opened',
  };
  const quoteKey = resolvedParams?.quote || '';
  const quote = quotes[quoteKey.toLowerCase()] || 'Page not found';
  return (
    <div style={{ minHeight: '100vh', background: '#181a20', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontFamily: 'cursive, sans-serif', marginBottom: '2rem' }}>{quote}</h1>
    </div>
  );
}
