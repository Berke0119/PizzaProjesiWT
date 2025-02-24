import styles from '../css/OrderCard.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ image, title, rating, reviews, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };
  
  return (
    <div className={styles.orderCard} onClick={handleClick}>
      <img src={image} alt={title} className={styles.orderCardImg} />
      <h3 className={styles.orderCardTitle}>{title}</h3>
      <div className={styles.orderCardContainer}>
        <p className={styles.orderCardRating}>{rating}</p>
        <div className={styles.orderCardPriceContainer}>
          <p className={styles.orderCardPriceReviews}>({reviews})</p>
          <p className={styles.orderCardPrice}>{price}₺</p>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};
export default OrderCard;
