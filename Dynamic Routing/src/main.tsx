import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiDataContextProvider } from './context/ApiDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ApiDataContextProvider>
      <App />
    </ApiDataContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
