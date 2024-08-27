import './Contato.css'

export default function Contato() {

    return (
        <>
            <section className='contact'>
                <div id="content-contact">
                    <div id='container'>
                        <h2>Say hello</h2>
                        <div className='form-content'>
                            <div className='lines'>
                                <div className='underline'></div>
                                <div className='underline-hello'></div>
                            </div>
                            <div className='input-field'>
                                <label htmlFor="email" className='label'>Email</label>
                                <input type="email" className='input'/><br />
                            </div>
                            <div className='underline-input'></div>
                            <div className='input-field'>
                                <label htmlFor="text" className='label'>Message</label>
                                <input type="text" className='input'/><br />
                            </div>
                            <div className='underline-input'></div>
                        </div>
                        <button className='send-message'>Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}