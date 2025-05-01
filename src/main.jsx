import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css';
import App from './App.jsx'
import Background from './components/Background.jsx'
import Minus from './assets/images/icon-minus.svg';
import Plus from './assets/images/icon-plus.svg';
import Star from './assets/images/icon-star.svg';
// import '../src/Accordian.css';
import ContactForm from './components/ContactForm.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


export {
  Background,
  Minus,
  Plus,
  Star
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App></App>
    {/* <div>
    <Background/>
    <Accordian />
    </div> */}
    </BrowserRouter>

  </StrictMode>,
)
