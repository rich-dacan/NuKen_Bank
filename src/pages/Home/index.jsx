import './styles.css';
import logo from '../../assets/image/nuKenzieHome.svg';
import aside from '../../assets/image/home_aside.svg';

const Home = ({logged}) => {

  return (

    <>

      <main className='container'>

        <aside className='start'>

          <img className='logo__nuKenzie' src={logo} alt="logo" />
          <h1  className='main__title'> Centralize o controle das suas finanças </h1>
          <p   className='p__home'> de forma rápida e segura </p>
          <button onClick={logged} className='btn__start'>Iniciar</button>

        </aside>

        <aside className='aside__right__home'>

          <img className='image__home' src={aside} alt="figure-demo"/>

        </aside>

      </main>

    </>
  )
}
export default Home;