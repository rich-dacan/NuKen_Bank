import './styles.css';
import Form         from '../../components/Form';
import TotalMoney   from '../../components/TotalMoney';
import ListCards    from '../../components/ListCards';
import ListFilters  from '../../components/ListFilters';
import Footer       from '../../components/Footer';
import { useState } from 'react';

const Dashboard = () => {

  const [listTransactions, setListTransactions] = useState([]);

  return (
    
    <>

      <main className='main__dashboard'>

        <aside className='aside__left'>

          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>

        </aside>

        <aside className='aside__right'>

          <ListFilters/>
          <ListCards listTransactions={listTransactions}/>

        </aside>

      
      </main>

      <Footer/>

    </>

  )
}
export default Dashboard;