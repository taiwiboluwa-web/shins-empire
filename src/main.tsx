import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Collection from './pages/Collection'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import './index.css'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
