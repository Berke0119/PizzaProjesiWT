import PropTypes from 'prop-types';
import styles from '../../css/OrderNote.module.css';
export default function OrderNote({note, setNote}){
  return(
    <div className={styles.orderNote}>
      <h3>Sipariş Notu</h3>
      <textarea
        className={styles.textarea}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
    </div>
  );
}

OrderNote.propTypes = {
  note: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
};
