import React from 'react'
import './styles.css'
import { Link, useNavigate} from 'react-router-dom';







function Footers() {
  return (
    <footer className='footer'> 
 <img src='https://cdn.discordapp.com/attachments/1011786549714747442/1096065728483963010/images.jfif' alt='Logo' />
      <p>Todos os direitos reservados ©</p>
      <p>Desenvoldido por: Vinícius</p>
      <nav>
            <ul>
                <Link style={{ textDecoration: 'none'}} to='/'>
            <li>home</li>
                </Link>

                <Link style={{ textDecoration: 'none'}} to='/fotos'>
            <li>Fotos</li>
                </Link>

                <Link style={{ textDecoration: 'none'}} to='/contato'>

            <li>Contato</li>
                </Link>
                <Link style={{ textDecoration: 'none'}} to='/comentario'>
            <li>Comentários</li>
            </Link>
            </ul>
        </nav>

    </footer>
  )

 
}

export default Footers;