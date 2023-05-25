import './App.css';
import React from 'react';
import Home from './home';
import Contato from './page/contato/contato';
import Fotos from './page/contato/Fotos/fotos';
import Detalhes from './page/contato/Detalhes/detalhes';
import Comentario from './page/comentário/comentario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(){


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/fotos' element={<Fotos/>}/>
      <Route path='/detalhes:id' element={<Detalhes/>}/>
      <Route path='comentario' element={<Comentario/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
