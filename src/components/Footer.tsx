import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#070706', color: '#f5f2eb', padding: '3.5rem 2rem 1.25rem', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '0.6rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#9b7a2e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#0a0a08', fontFamily: "'DM Mono', monospace", fontSize: '1.05rem' }}>SE</div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Shin's Empire</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(245,242,235,0.6)' }}>Cleared for Lagos</div>
              </div>
            </div>
            <p style={{ fontSize: '0. nine rem', color: 'rgba(245,242,235,0.65)', lineHeight: 1.6, marginTop: '0.25rem' }}>
              A curated import house drawing from the finest fashion markets of Dubai, Milan, Istanbul, and Paris, delivered with precision to your door in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem' }}>Quick Links</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <Link to="/#arrivals" style={{ color: 'rgba(245,242,235,0.84)', textDecoration: 'none', fontSize: '0.92rem' }}>Arrivals</Link>
              <Link to="/collection" style={{ color: 'rgba(245,242,235,0.84)', textDecoration: 'none', fontSize: '0.92rem' }}>Collection</Link>
              <Link to="/#about" style={{ color: 'rgba(245,242,235,0.84)', textDecoration: 'none', fontSize: '0.92rem' }}>About Us</Link>
              <Link to="/#contact" style={{ color: 'rgba(245,242,235,0.84)', textDecoration: 'none', fontSize: '0.92rem' }}>Contact</Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.7rem' }}>
              <div style={{ color: '#c9a84c', fontWeight: 700 }}>+234 704 520 7918</div>
              <a href="mailto:contact@shinsempire.com" style={{ color: 'rgba(245,242,235,0.84)', textDecoration: 'none' }}>contact@shinsempire.com</a>
            </div>

            <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>Follow Us</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#0b0b09', color: '#f5f2eb', textDecoration: 'none' }}>IG</a>
              <a href="https://wa.me/2347045207918" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#0b0b09', color: '#f5f2eb', textDecoration: 'none' }}>WA</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" style={{ width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#0b0b09', color: '#f5f2eb', textDecoration: 'none' }}>TT</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', marginTop: '1.5rem', paddingTop: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: 'rgba(245,242,235,0.7)' }}>© 2026 Shin's Empire. All rights reserved.</div>
          <div style={{ marginTop: '0.4rem' }}><Link to="/admin/login" style={{ fontSize: '0.78rem', color: 'rgba(245,242,235,0.45)', textDecoration: 'none' }}>Admin Login</Link></div>
        </div>
      </div>
    </footer>
  )
}
