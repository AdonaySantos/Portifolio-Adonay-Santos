import backroundImg from '../assets/background-home.jpg'
import './home.css'

export default function Home(){
    

    return (
        <>
            <section className='home'>
                <div id='home-content'>
                    <img src={backroundImg} alt="" />
                    <div className='text-container'>
                        <h2 className='texto-h2'>Adonay Santos</h2>
                        <h1 className='texto-h1'>Full Stack Developer</h1>
                    </div>
                </div>
            </section>
        </>
    )
}