import { Link } from 'react-router-dom'
import './Header.css'
import favicon from '../../assets/favicon.ico'
import App from '../../App'


export default function Header(){
    const buttonlink = () => {
        window.location.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0d9dc94a-147d-4619-b028-5a64d26dfbb2'
    };


    return (
        <header>
            <a href="#home">
               <img src={favicon} alt="logo" className='logo'/> 
            </a>
            <nav className='links'>
                {/* criar um map para os elementos de Link */}
                <Link to='#home'>Home</Link>
                <Link>About</Link>
                <Link>Projects</Link>
                <Link to='/Contato'>Contact</Link>
            </nav>
            <div className='cv-button'>
                <a href={buttonlink}>Resumo</a>
            </div>
        </header>
    )
}