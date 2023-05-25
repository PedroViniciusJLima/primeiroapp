import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './style.css';
import Logo from '../../../assets/images.jfif';


function Header(){


    
    return(
        <header>
            <img id='logo' src={Logo}/>
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
       </header>
    )
}


export default Header;