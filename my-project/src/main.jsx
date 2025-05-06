import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login.jsx'; // Pastikan nama file dan path-nya sesuai
import './index.css'; // File ini untuk Tailwind atau CSS lainnya

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
