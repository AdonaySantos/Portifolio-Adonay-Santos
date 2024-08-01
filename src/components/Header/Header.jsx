import { Link } from 'react-router-dom';
import favicon from '../../assets/favicon-light.ico';
import './Header.css';


export default function Header(){
    const buttonlink = () => {
        window.location.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0d9dc94a-147d-4619-b028-5a64d26dfbb2'
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
                        <a href={buttonlink}>Resumo</a>
                    </div>
                </header>
            </section>
        </>

    )
}