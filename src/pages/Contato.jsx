import './Contato.css'

export default function Contato() {

    return (
        <>
            <section>
                <div id="content">
                    <div id='container'>
                        <h2>Say hello</h2>
                        <div className='form-content'>
                            <label htmlFor="email" className='email'>Email</label>
                            <input type="email" className='email'/><br />
                            <div className='underline'></div>
                            <label htmlFor="text" className='text'>Message</label>
                            <input type="text" /><br />
                            <div className='underline'></div>
                        </div>
                        <button className='send-message'>Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}