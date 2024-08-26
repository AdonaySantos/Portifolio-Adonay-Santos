import { Link } from 'react-router-dom';
import favicon from '../../assets/favicon-light.ico';
import './Header.css';


export default function Header(){
    const buttonlink = () => {
        window.location.href = 'https://drive.google.com/file/d/1ygxpDoT8QXGwVyRuVuRgnETYmrXfSAvB/view?usp=sharing'
    };

    const aboutLink = "/#About"

    return (
        <>
            <section>
                <header>
                    <Link to='/'>
                        <img src={favicon} alt="logo" className='logo'/>
                    </Link>
                    <nav className='links'>
                        <Link to='/'>Home</Link>
                        <a href="/#About">About</a>
                        <a href="/#Projects">Projects</a>
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