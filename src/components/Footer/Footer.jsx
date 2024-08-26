import { Link } from 'react-router-dom';
import githubicon from '../../assets/developer.ico'
import './Footer.css';

export default function Footer() {
    const adonaySantos = "https://github.com/AdonaySantos"

    return (
        <footer className='container-footer'>
            <div></div>
            <p className='text-footer'>© {new Date().getFullYear()} Adonay Santos. <u> Crafted by yours truly </u></p>
            <div className='contact-links'>
                    <Link to={adonaySantos}><img src={githubicon} alt="GitHub" className='git-icon'/></Link>
            </div>
        </footer>
    );
}