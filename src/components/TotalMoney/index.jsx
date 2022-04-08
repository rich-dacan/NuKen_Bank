import './styles.css';
import { useState, useEffect } from 'react';

const TotalMoney = ({ listTransactions }) => {

  const [sumValues, setSumValues] = useState(0);

    useEffect(() => {

      if (listTransactions?.length > 0) {

        const totalValue = listTransactions.reduce((acc, {value, type}) => {

          if (type ===  'Entrada') {
            
            return Number(value) + acc;

          } else {

            return Number(value * -1) + acc;
          }
    
        }, 0);

        setSumValues(totalValue);
      }
      
    }, [listTransactions, ]);

  return (

    <>

      <div className='saldo'> 
        <span>
        <h2>Valor Total:</h2>
        <p>*O valor se refere ao saldo</p>
        </span>

        <span className='price'>
          <p>$ {sumValues}</p>
        </span>
      </div>

    </>
  )
}
export default TotalMoney;
