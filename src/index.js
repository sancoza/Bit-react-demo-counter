import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DOMrootElement = document.getElementById('root');
const root = ReactDOM.createRoot(DOMrootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


