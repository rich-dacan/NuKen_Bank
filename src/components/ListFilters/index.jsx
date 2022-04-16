import './styles.css';

const ListFilters = ({listTransactions, setListTransactions, filteredTransactions, setFilteredTransactions}) => {

  const filterTransaction = (typeTransaction) => {

    setFilteredTransactions(listTransactions.filter((item) => item.type === typeTransaction))

  }

  const showAllTransactions = () => {

    setFilteredTransactions(listTransactions)
  }

  return (

    <>
    
      <div className='filters__container'>

        <p className='resumo__financeiro'>Resumo Financeiro</p>

        <ul className='list__filters'>

          <li><button onClick={() => showAllTransactions()}> Todos </button></li>
          <li><button onClick={() => filterTransaction('Entrada')}> Entradas </button></li>
          <li><button onClick={() => filterTransaction('Saída')}> Despesas </button></li>
          
        </ul>

      </div>
    
    </>
  )
}
export default ListFilters;