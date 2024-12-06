import { useState } from 'react';
import './style.css';
import detalhe from '../../img/2.png';
import hello from '../../img/hello.png'
import { Link } from 'react-router-dom';

export const Home = ()=> {
  const [count, setCount] = useState(0)

  return (
    <main>
    <div className='home'>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Unde h
        arum aut tempora ex, placeat enim, saepe magnam 
        debitis earum omnis quam maiores assumenda 
        repellendus! 
        Eum et dignissimos provident doloremque nisi.
      </p>
      <Link to='/contact'className='acess_contact'>Acess Contact</Link>
     <img src={hello} alt=""className='hello' />
    </div>
    <img src={detalhe} alt="" className='detalhe_home'/>
    </main>
  )
}

