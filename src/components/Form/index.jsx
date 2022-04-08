import './styles.css';
import { useState } from 'react';

const Form = ({listTransactions, setListTransactions}) => {

  const [inputDescription, setInputDescription]   = useState('');
  const [inputValue, setInputValue]               = useState(0);
  const [inputType, setInputType]                 = useState('Entrada');
  const [id, setId]                               = useState(1);

  const addNewTransaction = (description, value, type) => {

    if (description !== '' && value !== '' ) {

      const newTransaction = {};

      newTransaction.description  = description;
      newTransaction.value        = value;
      newTransaction.type         = type;
      newTransaction.id           = id;

      setListTransactions([...listTransactions, newTransaction]);
      setInputDescription('');
      setInputValue('');
      setId(id + 1);
    }

  }

  return (

    <>

      <form onSubmit={(e) => e.preventDefault()}>

        <p className='description'> Descrição 
        </p>

        <input 
          className='input__description'
          type="text" 
          placeholder='Digite aqui sua descrição'
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />

        <p className='example'> Ex: Compra de roupas </p>

        <span className='type__values'>

        <p> Valor </p>
        <p> Tipo de valor </p>

        </span>
        
        <span className='values__select'>

          <input
            className='value__money'  
            type="text"     
            placeholder='R$ 1,00'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <select   
            className='value__select' 
            name="select"   
            placeholder='Tipo de Valor'
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option className='select__in'    value="entrada" > Entrada   </option>
            <option className='select__out'   value="saida"   > Despesa   </option>

          </select>

        </span>

        <button onClick={() => addNewTransaction(inputDescription, inputValue, inputType)}> Inserir Valor </button>

      </form>
    </>
  )
}
export default Form;
