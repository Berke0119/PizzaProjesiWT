import styles from '../../css/DoughSelector.module.css';
import PropTypes from 'prop-types';
export default function DoughSelector({dough, setDough}){
  return(
    <div className={styles.doughSelector}>
      <h3>
        Hamur Seçimi <span className={styles.required}>*</span>
      </h3>
      <div className={styles.selectContainer}>
        <select 
          className={styles.selectBox}
          value={dough}
          onChange={(e) => setDough(e.target.value)}
        >
          <option value="">- Hamur Kalınlığı Seç -</option>
          <option value="ince">İnce Hamur</option>
          <option value="normal">Normal Hamur</option>
          <option value="kalın">Kalın Hamur</option>
        </select>
      </div>
    </div>
  );
}

DoughSelector.propTypes = {
  dough: PropTypes.string.isRequired,
  setDough: PropTypes.func.isRequired,
};
