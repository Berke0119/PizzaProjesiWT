import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import styles from '../../css/ToppingsSelector.module.css';

const toppingsList = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
  "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Kabak", "Ananas"];

export default function ToppingsSelector({toppings, setToppings}){

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(toppings.length < 4){
      setErrorMessage('En az 4 malzeme seçmelisiniz');
    }else if(toppings.length > 10){
      setErrorMessage('En fazla 10 malzeme seçebilirsiniz');
    }else{
      setErrorMessage('');
    }
  },[toppings])

   function handleToppingChange(topping){
    if(toppings.includes(topping)){
      setToppings(toppings.filter((t) => t !== topping));
    }else{
      if(toppings.length < 10){
        setToppings([...toppings, topping]);
      }
    }
   }

  return(
    <div className={styles.toppingsSelector}>
      <h3>Ek Malzemeler</h3>
      <p className={styles.restriction}>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <div className={styles.toppingGrid}>
        {toppingsList.map((topping) => (
          <label
            key={topping}
            className={styles.topping}
          >
            <input
              type='checkbox'
              checked={toppings.includes(topping)}
              onChange={() => handleToppingChange(topping)}
            />
            <span className={styles.customCheckbox}></span>
            <span className={styles.toppingName}>{topping}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

ToppingsSelector.propTypes = {
  toppings: PropTypes.array.isRequired,
  setToppings: PropTypes.func.isRequired,
};

