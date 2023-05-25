import React, { useState } from 'react';
import Header from '../../components/button/Header/header';



function Comentario(){
    const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nome, email, texto);
    // Aqui você pode enviar o formulário para o servidor
  }

    return (
        <div>
            <Header />

        
    <form action="/formulario-contato" method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome" className="nome">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome_usuario"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="nome">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email_usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="texto" className="nome">
          Texto:
        </label>
        <textarea
          id="texto"
          name="texto_usuario"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
      </div>
      <div className="button">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default FormularioContato;
        </div>


    )
}

export default Comentario;