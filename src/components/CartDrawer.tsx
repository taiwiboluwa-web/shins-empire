import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { cartItems, clearCart, cartOpen, setCartOpen } = useCart()

  if (!cartOpen) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200 }} onClick={() => setCartOpen(false)}>
      <div onClick={e => e.stopPropagation()} className="glass" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '360px',
        background: 'rgba(10,10,8,0.74)',
        backdropFilter: 'blur(28px) saturate(1.8)', WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
        borderLeft: '1px solid rgba(201,168,76,0.18)', boxShadow: '-12px 0 60px rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column', padding: '2rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.5rem' }}>Your Cart</div>
          <button onClick={() => setCartOpen(false)} className="neu-btn" style={{ padding: '0.4rem 0.6rem', borderRadius: '3px', fontSize: '0.9rem' }}>✕</button>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: '2rem' }}>
              <div style={{ fontSize: '2rem', opacity: 0.3 }}>🛒</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(245,242,235,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Manifest Empty</div>
              <Link to="/collection" onClick={() => setCartOpen(false)}
                style={{ marginTop: '1rem', background: '#c9a84c', color: '#0a0a08', padding: '0.75rem 1.5rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                Browse Collection
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((it, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{it.name}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", color: '#c9a84c' }}>{it.price ? `₦${it.price.toLocaleString()}` : '—'}</div>
                </div>
              ))}
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => { clearCart(); setCartOpen(false) }} className="neu-btn" style={{ padding: '0.6rem 0.9rem' }}>Clear</button>
                <button className="neu-btn" style={{ background: 'linear-gradient(135deg, #d4a942 0%, #f0cc6a 50%)', color: '#0a0a08', padding: '0.6rem 0.9rem', fontWeight: 700 }}>Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: -1 }} />
    </div>
  )
}
