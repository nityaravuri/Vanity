// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // 👈 1. DO YOU HAVE THIS IMPORT?

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 2. IS YOUR <App /> WRAPPED IN THIS? */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)