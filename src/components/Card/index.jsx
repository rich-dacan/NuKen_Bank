import './styles.css';
import Trash             from '../../assets/image/trash.svg';
import { toast }         from 'react-toastify';
import { cssTransition } from 'react-toastify';

const Card = ({listTransactions, setListTransactions, filteredTransactions, setFilteredTransactions}) => {

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });

  const remove = (id) => {
    setListTransactions(listTransactions.filter(transaction => transaction.id !== id));
    
    setFilteredTransactions(filteredTransactions.filter(transaction => transaction.id !== id));

    toast.success('Transação removida com sucesso!', {
      transition: bounce
    });
    
  }

  return (

    <>
      {listTransactions.map(({description, value, type, id}) =>
  
        type !== 'Entrada' ?
      
          <li key={id} className='li__container__despesa'>
            <div className='description__container'>

              <h2>{description}</h2>
              <p className='type'> Despesa </p>

            </div>
            <div className='value__container remove__item'>

              <p>R$ {value}</p>
              <button onClick={() => remove(id)}><img alt='trash__icon' src={Trash}/></button>
              
            </div>

          </li>
        : 

          <li key={id} className='li__container'>
            <div className='description__container'>

              <h2>{description}</h2>
              <p className='type'>{type}</p>

            </div>
            <div className='value__container remove__item'>

              <p>R$ {value}</p>
              <button onClick={() => remove(id)}><img alt='trash__icon' src={Trash}/></button>
              
            </div>
        
          </li> 
          
      )}
    
    </>
  )
}
export default Card;

