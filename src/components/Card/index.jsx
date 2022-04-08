import './styles.css';

const Card = ({description, type, value}) => {

  return (

    <>
    
      {type === 'Entrada' ?
  
        <li className='li__container'>
          <div className='description__container'>

            <h2>{description}</h2>
            <p className='type'>{type}</p>

          </div>
          <div className='value__container'>

            <p>R$ {value}</p>
            
          </div>

        </li>

      : 

        <li className='li__container__despesa'>
          <div className='description__container'>

            <h2>{description}</h2>
            <p className='type'>Despesa</p>

          </div>
          <div className='value__container'>

            <p>R$ {value * -1}</p>
            
          </div>

        </li>
      }
    
    </>
  )
}
export default Card;
