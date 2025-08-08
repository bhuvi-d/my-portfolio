import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './pages/App.jsx';
import MouseTrail from './components/MouseTrail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseTrail />
    <App />
  </StrictMode>
);
