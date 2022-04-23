import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Sidebar from './components/sidebar';
// import Cadastro from './pages/cadastro/index.js';
// import Checkout from './pages/checkout/index.js';
// import Header from './components/header/index';
// import Cadastro from './pages/cadastro/index.js';
import Lojas from './pages/Lojas/index.js';
import Cadastro from './pages/cadastro';
import Home from './pages/home';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar></Sidebar>
    <Home></Home>
  </React.StrictMode>,
  document.getElementById('root')
);

