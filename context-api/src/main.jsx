import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './context/Counter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <App /> 
    </CounterProvider>
  </React.StrictMode>,
)
//any compeonts inside app will automatically wrapped under provider and all comoent sinside this has accesws
//children is the app for the content provider adn all child eleemtn s are wrapped inside this 
