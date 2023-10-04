import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { CustomMouse } from './components/customMouse/CustomMouse.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomMouse/>
    <App />
  </React.StrictMode>,
)
