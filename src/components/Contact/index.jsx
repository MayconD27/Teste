import './style.css'; 
export const Contact = ()=> {
    return(
        <main>
            <div className='text_contato'>
                <h1>Contate-nos</h1>
                <p>
                    Entre em contato conosco para tirar suas dúvidas, solicitar mais 
                    informações ou deixar um feedback. 
                    Estamos à disposição para te ajudar!
                </p>
            </div>
            <div className="form_contato">
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email" />
                <textarea name="" id="" placeholder="Mensagem"></textarea>
            </div>
        </main>
    )
}