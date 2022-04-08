import './styles.css';

const ListFilters = () => {

  return (

    <>
    
      <div className='filters__container'>

        <p className='resumo__financeiro'>Resumo Financeiro</p>

        <ul className='list__filters'>

          <li><button> Todos    </button></li>
          <li><button> Entradas </button></li>
          <li><button> Despesas </button></li>
          
        </ul>

      </div>
    
    </>
  )
}
export default ListFilters;