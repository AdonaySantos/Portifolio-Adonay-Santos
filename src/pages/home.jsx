import backroundImg from '../assets/background-home.jpg'
import './home.css'

export default function Home(){
    return (
        <>
            <div className='home'>
                <div id='background'>
                    <img src={backroundImg} alt="" />
                    <h1 className='texto'>Adonay Santos <br /> Full Stack Developer</h1>
                </div>
            </div>
        </>
    )
}