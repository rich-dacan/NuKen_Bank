import './styles.css';
import logo from '../../assets/image/nuKenzieHome.svg';
import aside from '../../assets/image/home_aside.svg';

import { motion } from 'framer-motion';

const Home = ({logged}) => {

  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    
    >

      <main className='container'>

        <aside className='start'>

          <img className='logo__nuKenzie' src={logo} alt="logo" />
          <h1  className='main__title'> Centralize o controle das suas finanças </h1>
          <p   className='p__home'> de forma rápida e segura </p>
          
          <button onClick={logged} className='btn__start'> Iniciar </button>

        </aside>

        <aside className='aside__right__home'>

          <img className='image__home' src={aside} alt="figure-demo"/>

        </aside>

      </main>

    </motion.div>
  )
}
export default Home;