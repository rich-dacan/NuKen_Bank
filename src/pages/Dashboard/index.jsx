import './styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Form         from '../../components/Form';
import TotalMoney   from '../../components/TotalMoney';
import ListCards    from '../../components/ListCards';
import ListFilters  from '../../components/ListFilters';
import Footer       from '../../components/Footer';

import { useState }       from 'react';
import { motion }         from 'framer-motion';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {

  const [listTransactions, setListTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  return (
    
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1.5}}
    
    >

      <main className='main__dashboard'>

        <aside className='aside__left'>

          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} filteredTransactions={filteredTransactions} setFilteredTransactions={setFilteredTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>

        </aside>

        <aside className='aside__right'>

          <ListFilters listTransactions={listTransactions} setListTransactions={setListTransactions} filteredTransactions={filteredTransactions}  setFilteredTransactions={setFilteredTransactions}/>

          <ListCards listTransactions={filteredTransactions.length === 0 ? listTransactions : filteredTransactions} setListTransactions={setListTransactions} 
          filteredTransactions={filteredTransactions} setFilteredTransactions={setFilteredTransactions}/>

        </aside>

      </main>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Footer/>

    </motion.div>

  )
}
export default Dashboard;