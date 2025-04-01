import styles from '../css/OrderHeader.module.css';

export default function OrderHeader(){
  return(
    <header className={styles.header}>
        <img src='/images/iteration-1-images/logo.svg' alt="logo"/>
    </header>    
  );
}
