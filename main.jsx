import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Add.jsx'
import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button />
    <HomeIcon />
    <PlusIcon />
   
  </StrictMode>,
)
// import React from 'react';
