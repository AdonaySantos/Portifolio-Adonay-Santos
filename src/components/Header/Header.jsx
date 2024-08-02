import { Link } from 'react-router-dom';
import favicon from '../../assets/favicon-light.ico';
import './Header.css';


export default function Header(){
    const buttonlink = () => {
        window.location.href = 'https://drive.google.com/file/d/1ygxpDoT8QXGwVyRuVuRgnETYmrXfSAvB/view?usp=sharing'
    };


    return (
        <>
            <section>
                <header>
                    <a href="#home">
                        <img src={favicon} alt="logo" className='logo'/> 
                    </a>
                    <nav className='links'>
                        <Link to='/'>Home</Link>
                        <Link>About</Link>
                        <Link>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                    </nav>
                    <div className='cv-button'>
                        <button onClick={buttonlink}>Resumo</button>
                    </div>
                </header>
            </section>
        </>

    )
}