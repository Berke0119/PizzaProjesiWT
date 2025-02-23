import styles from '../../css/SizeSelector.module.css';
import PropTypes from 'prop-types';
export default function SizeSelector({size, setSize}){

  const sizes = ["S","M","L"];

  return(
    <div className={styles.sizeSelector}>
      <h3>
        Boyut Seç <span className={styles.required}>*</span>
      </h3>
      <div className={styles.sizeOptions}>
        {sizes.map((item) => {
          return(
            <button 
              key={item}
              className={`${styles.sizeButton} ${size === item ? styles.selected : ''}`}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  );
}

SizeSelector.propTypes = {
  size: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
};
