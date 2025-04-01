import styles from '../css/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/1.svg" alt="Yeni Kore"/>
          <a href="#">YENİ! Kore</a>
        </li>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza"/>
          <a href="#">Pizza</a>
        </li>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger"/>
          <a href="#">Burger</a>
        </li>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar"/>
          <a href="#">Kızartmalar</a>
        </li>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food"/>
          <a href="#">Fast Food</a>
        </li>
        <li className={styles.navbarItem}>
          <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek"/>
          <a href="#">Gazlı İçecek</a>
        </li>
      </ul>
    </nav>
  );
}
