import styles from '../css/CardSection.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardSection() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };
  return (
    <section className={styles.cardSection}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.squareCard}`}>
          <div className={styles.cardContent}>
            <h3>Özel<br/>Lezzetus</h3>
            <p>Position:Absolute Acı Burger</p>
          </div>
          <a className={styles.orderButton} onClick={handleClick}>Sipariş Ver</a>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={`${styles.card} ${styles.rectangleCard} ${styles.rectangleCard1}`}>
            <div className={styles.cardContent}>
              <h3>Hackathlon<br />Burger Menü</h3>
            </div>
            <a className={styles.orderButton} onClick={handleClick}>Sipariş Ver</a>
          </div>
          <div className={`${styles.card} ${styles.rectangleCard} ${styles.rectangleCard2}`}>
            <div className={styles.cardContent}>
              <h3><span className={styles.highlight}>Çoooook</span> hızlı<br />npm gibi kurye</h3>
            </div>
            <a className={styles.orderButton} onClick={handleClick}>Sipariş Ver</a>
          </div>
        </div>
      </div>
    </section>
  );
}
