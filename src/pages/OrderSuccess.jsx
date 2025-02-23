import { useLocation } from 'react-router-dom';
import styles from '../css/OrderSuccess.module.css';

export default function OrderSuccess() {

  const location = useLocation();
  const { order } = location.state || {};

  return (
    <div className={styles.orderSuccess}>
      <img src='../../images/iteration-1-images/logo.svg' alt="Logo"/>
      <p className={styles.subText}>lezzetin yolda</p>
      <h2>SİPARİŞ ALINDI</h2>
      <div className={styles.line}></div>

      <div className={styles.orderDetails}>
        <h3>Position Absolute Acı Pizza</h3>
        <div className={styles.orderDetailsItem}>
          <p><span>Boyut:</span> {order.size}</p>
          <p><span>Hamur:</span> {order.dough}</p>
          <p><span className={styles.toppings}>Ek Malzemeler:</span> {order.toppings?.join(", ")}</p>
        </div>
        
      </div>

      <div className={styles.orderSummary}>
        <h3>Sipariş Toplamı</h3>
        <div className={styles.orderPrice}>
          <p>Seçimler</p>
          <p>{order.toppingsPrice.toFixed(2)}₺</p>
        </div>
        <div className={styles.orderTotal}>
          <p>Toplam</p>
          <p>{order.totalPrice.toFixed(2)}₺</p>
        </div>
      </div>
    </div>
  )
}




