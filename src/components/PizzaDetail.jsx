import styles from '../css/PizzaDetail.module.css';
import { Link } from 'react-router-dom';

export default function PizzaDetail() {
  return (
    <div className={styles.pizzaDetail}>
      <div className={styles.pizzaDetailContent}>
        <img className={styles.pizzaImage} src='/images/iteration-2-images/pictures/form-banner.png' alt="pizza" />
        <nav className={styles.breadCrumb}>
          <Link to="/">Anasayfa</Link> <span>›</span> <Link to="/form" className={styles.breadCrumbLink}>Sipariş Oluştur</Link>
        </nav>
        <h1 className={styles.pizzaName}>Position Absolute Acı Pizza</h1>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaPrice}>85.50₺</p>
          <div className={styles.pizzaRating}>
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>

        <p className={styles.pizzaDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptatibus? Corporis facere, vel fugiat distinctio tempore explicabo quos error necessitatibus aperiam inventore! Sint voluptatibus beatae magni pariatur inventore rerum itaque in ea tempora aliquam eum unde, esse corrupti eius modi omnis ad non qui nobis distinctio. Quas temporibus aliquam vel?
        </p>

      </div>
    </div>
  );
}
