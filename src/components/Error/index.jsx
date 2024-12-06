import error from '../../img/error.png';
import { Link } from 'react-router-dom';
import './style.css';
export const Error = ()=>{
    return (
        <div className='error_container'>
            <p>Ops...!</p>
            <img src={error} alt="" className='error'/>
            <p>página não encontrada</p>
            <Link to='/' className='retorn_home'>Retornar a página inicial</Link>
        </div>
    )
}