import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import Error404 from '../src/pages/Erro404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastro/video" exact component={CadastroVideo}/>
      <Route path="/cadastro/categoria" exact component={CadastroCategoria}/>
      <Route component={Error404}/>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

