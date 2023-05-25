import React, { Suspense, lazy } from 'react';
import Header from '../components/button/Header/header';
import './styles.css';
import Video from '../../src/assets/video.mp4';
import Cards from '../components/button/cards';
import Footer from '../components/Footer';
import Footers from '../components/Footer';

function Home(){
    



    
    return (
        
           <>
           
           <Header />
           <div id='banner'></div> 
           <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos.
                    </video>
                        <div id='sinopse'>
                            <p className='description'>
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos alidos confiáveis, o vigilante solitário se estabelece
                        como a personificação da vingança para a população.
                            </p>
                            <button className='button'>Comprar ingresso</button>
                    </div>

                </div>
            </div>    
            <Cards />
            <Footers />
        
            
           </> 


    )
}

export default Home;