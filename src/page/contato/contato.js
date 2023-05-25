import React from 'react'
import Header from '../../components/button/Header/header';
import './styles.css'
import Footers from '../../components/Footer';

function Contato(){

    return (
        <div>
            <Header />
            <div id="banner"></div>
            <div class="container"></div>
      <form action="/formulario-contato" method="post">
        <div>
          <label htmlFor="nome" className="nome">
            Nome:
          </label>
          <input type="text" id="nome" name="nome_usuario" />
        </div>
        <div>
          <label htmlFor="email" className="nome cont">
            E-mail:
          </label>
          <input type="email" id="email" name="email_usuario" />
        </div>
        <div>
          <label htmlFor="texto" className="nome cont">
            Texto:
          </label>
          <textarea id="texto" name="texto_usuario"></textarea>
        </div>
       
          <button type="submit" className="enviar">
            Enviar
          </button>
        
      </form>
      <Footers />
    </div>
  );
}
export default Contato;