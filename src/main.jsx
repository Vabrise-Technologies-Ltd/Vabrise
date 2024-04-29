import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartProvider from './components/Contexts/CartContext'
import SidebarProvider from './components/Contexts/SidebarContext'
import { SearchProvider } from './components/Contexts/SearchContext'
import FetchProvider from './components/Contexts/FetchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchProvider>
      <CartProvider>
        <SidebarProvider>
          <SearchProvider>
            <App /> 
          </SearchProvider>
        </SidebarProvider>
      </CartProvider>
    </FetchProvider>
  </React.StrictMode>,
)
