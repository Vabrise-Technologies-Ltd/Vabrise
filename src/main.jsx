import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartProvider from './components/Contexts/CartContext'
import SidebarProvider from './components/Contexts/SidebarContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </CartProvider>
  </React.StrictMode>,
)
