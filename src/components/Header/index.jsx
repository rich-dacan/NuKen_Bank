import './styles.css';
import logo from '../../assets/image/nuKenzie.svg';

const Header = ({logged}) => {

  return (
    <header className='main__header'>

      <img    src={logo}   alt="nuKenzie-logo"/>
      
      <button onClick={logged}> Início </button>

    </header>
  )
}
export default Header;