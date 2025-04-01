import styles from '../css/OrderSection.module.css';
import { useState } from 'react';
import OrderCard from './OrderCard';

export default function OrderSection() {


  const navItems = ['Ramen', 'Pizza', 'Burger', 'French fries', 'Fast Food', 'Soft Drinks'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };


  const orderData = [
    {
      image: '../images/iteration-2-images/pictures/food-1.png',
      title: 'Terminal Pizza',
      rating: '4.9',
      reviews: '200',
      price: '60',
    },
    {
      image: '../images/iteration-2-images/pictures/food-2.png',
      title: 'Position Absolute Acı Pizza',
      rating: '4.9',
      reviews: '200',
      price: '60',
    },
    {
      image: '../images/iteration-2-images/pictures/food-3.png',
      title: 'useEffect Tavuklu Burger',
      rating: '4.9',
      reviews: '200',
      price: '60',
    },
  ];

  return (
    <div className={styles.orderSection}>
      <div className={styles.orderContent}>
        <p className={styles.orderSlogan}>en çok paketlenen menüler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <nav className={styles.orderNavbar}>
          <ul className={styles.orderNavList}>
            {navItems.map((item, index) => (
              <li key={index} className={`${styles.orderNavItem} ${index === activeIndex ? styles.active : ''}`} onClick={() => handleItemClick(index)}>
                <img src={`/images/iteration-2-images/icons/${index + 1}.svg`} alt={item} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.orderCards}>
          {orderData.map((item, index) => (
            <OrderCard
              key={index}
              image={item.image}
              title={item.title}
              rating={item.rating}
              reviews={item.reviews}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
