import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

export default function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.headerLogoImg} src="/images/iteration-1-images/logo.svg" alt="Logo" />
      </div>
      <p>fırsatı kaçırma</p>
      <h1>Kod Acıktırır<br />Pızza, doyurur</h1>
      <a className={styles.headerButton} onClick={handleClick}>Acıktım</a>
    </header>
  );
}