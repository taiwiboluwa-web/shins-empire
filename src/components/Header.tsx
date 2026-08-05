import React from 'react'
import { Link } from 'react-router-dom'
import logoDark from '@/imports/SEWA_S__3_-1.png'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { cartItems, setCartOpen } = useCart()

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem', height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
    }}>
      <Link to="/">
        <img src={logoDark} alt="Shin's Fashion" style={{ height: '62px', width: 'auto', objectFit: 'contain' }} />
      </Link>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {['Arrivals', 'Collection', 'About', 'Contact'].map(l => (
          <Link key={l} to={l === 'Collection' ? '/collection' : `/#${l.toLowerCase()}`} style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f5f2eb', textDecoration: 'none', fontWeight: 500 }}>{l}</Link>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href="https://wa.me/2347045207918?text=Hello" className="neu-btn" style={{ fontSize: '0.68rem', color: '#f5f2eb', padding: '0.45rem 1rem', borderRadius: '3px', textDecoration: 'none', fontWeight: 600 }}>📱 Order</a>
        <button className="neu-btn" onClick={() => setCartOpen(true)} style={{ position: 'relative', padding: '0.45rem 0.7rem', borderRadius: '3px', fontSize: '1rem' }}>
          🛒{cartItems.length > 0 && <span style={{ marginLeft: '6px', background: '#c9a84c', color: '#0a0a08', fontSize: '0.66rem', padding: '0.12rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>{cartItems.length}</span>}
        </button>
      </div>
    </header>
  )
}
