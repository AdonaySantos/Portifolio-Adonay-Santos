import asset from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <header>
            <img src={asset} alt="" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </nav>
        </header>
    )
}