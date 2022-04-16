import './styles.css';
import NoCard from '../../assets/image/NoCard.svg';
import Card from '../Card';

const ListCards = ({ listTransactions, setListTransactions, filteredTransactions, setFilteredTransactions }) => {

  return (

    <div className='container__list'>
      
      <ul className='list__transactions'>

        { listTransactions.length > 0 ? (

          <Card key={listTransactions.id} listTransactions={listTransactions} setListTransactions={setListTransactions} filteredTransactions={filteredTransactions} setFilteredTransactions={setFilteredTransactions} />

        ) : (

          <>
            <div className='no__transactions'>

              <h2  className='vazio'> Você ainda não possui nenhum lançamento </h2>
              <img className='noTransactions' src={NoCard} alt="no-transactions" />

            </div>

          </>
      
        )}
        
      </ul>

    </div>
  )
}
export default ListCards;