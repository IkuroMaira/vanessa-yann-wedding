import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import './styles/variables.css';
import App from './App.jsx'
import LanguageContextProvider from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LanguageContextProvider>
            <App />
        </LanguageContextProvider>
    </StrictMode>,
)
