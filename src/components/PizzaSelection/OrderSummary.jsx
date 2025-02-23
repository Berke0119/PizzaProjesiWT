import { useNavigate } from 'react-router-dom';
import styles from '../../css/OrderSummary.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';

export default function OrderSummary({ toppingsPrice, quantity, setQuantity, totalPrice, order }) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const isFormValid = order.size && order.dough && order.toppings.length >= 4;


  const showToastError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  const handleOrder = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      if (!order.size) {
        showToastError("Lütfen bir pizza boyutu seçin!");
      }
      if (!order.dough) {
        showToastError("Lütfen bir hamur türü seçin!");
      }
      if (order.toppings.length < 4) {
        showToastError("En az 4 malzeme seçmelisiniz!");
      }
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post("https://reqres.in/api/pizza", {
        name: order.name,
        size: order.size,
        dough: order.dough,
        toppings: order.toppings,
        basePrice: order.basePrice,
        totalPrice: totalPrice,
        quantity: quantity,
      });

      console.log("Sipariş Yanıtı:", response.data);
      toast.success("Sipariş başarıyla alındı!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate('/success', { state: { order } });
      }, 3000); 
    } catch (err) {
      console.error("Sipariş Hatası:", err);
      showToastError("Sipariş sırasında bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className={styles.orderSummary}>
      <div className={styles.orderSummaryContainer}>
        <div className={styles.quantitySelector}>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        <div className={styles.orderSummaryCardContainer}>
          <div className={styles.orderSummaryCard}>
            <h3>Sipariş Toplamı</h3>
            <div className={styles.orderDetails}>
              <p>Seçimler</p>
              <p>{(toppingsPrice).toFixed(2)}₺</p>
            </div>
            <div className={styles.orderDetailsTotal}>
              <p className={styles.totalText}>Toplam</p>
              <p className={styles.totalAmount}>{totalPrice.toFixed(2)}₺</p>
            </div>

          </div>
          <button className={styles.orderButton} onClick={handleOrder}>{isLoading ? "Sipariş Veriliyor..." : "SİPARİŞ VER"}</button>
        </div>

      </div>

    </div>
  )
}

OrderSummary.propTypes = {
  basePrice: PropTypes.number.isRequired,
  toppingsPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  order: PropTypes.object.isRequired,
};
