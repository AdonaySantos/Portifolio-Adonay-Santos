import './home.css'
import About from '../components/About/About'
import { useEffect, useState } from 'react';

export default function Home(){
    const tecnologias = ["+JavaScript", "+React", "+Python", "+Flask", "+MongoDB", "+MySQL"];
    const [currentTech, setCurrentTech] = useState(tecnologias[0]);
    let index = 0;

    // Efeito de aparecer e desaparecer tecnologias utilizadas
    useEffect(() => {
        const intervalId = setInterval(() => {
            index = (index + 1) % tecnologias.length;
            setCurrentTech(tecnologias[index]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    // Efeito de desaparecimento de elementos conforme a página desce
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.max(1 - scrollY / 380, 0); // Calcula a opacidade com base na rolagem
            document.querySelector('.text-container').style.opacity = opacity;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className='home'>
                <div id='content'>
                    <div id='container'>
                        <h2 className='texto-h2'>ADONAY SANTOS</h2>
                        <h1 className='texto-h1'>Developer <br /></h1>
                        <h1 className='texto-h1-span'>
                            <span className='fade-text'>
                                {currentTech}
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className='home'>
                <div id='About'>
                    <About />
                </div>
            </section>
        </>
    )
}