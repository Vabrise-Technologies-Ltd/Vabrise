import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SidebarProvider from './context/SidebarContext'
import { SearchProvider } from './context/SearchContext'
import FetchProvider from './context/FetchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchProvider>
        <SidebarProvider>
          <SearchProvider>
            <App /> 
          </SearchProvider>
        </SidebarProvider>
    </FetchProvider>
  </React.StrictMode>,
)
