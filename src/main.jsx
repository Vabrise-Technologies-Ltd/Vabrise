import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SearchProvider } from './context/SearchContext'
import FetchProvider from './context/FetchContext'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <FetchProvider>
      <SearchProvider>
        <App /> 
      </SearchProvider>
    </FetchProvider>
  </React.StrictMode>,
)
