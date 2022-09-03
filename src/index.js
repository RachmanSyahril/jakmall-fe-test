import React from 'react'
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import "./assets/App.css";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);