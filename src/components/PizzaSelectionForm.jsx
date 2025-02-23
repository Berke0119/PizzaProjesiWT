import SizeSelector from './PizzaSelection/SizeSelector';
import DoughSelector from './PizzaSelection/DoughSelector';
import ToppingsSelector from './PizzaSelection/ToppingsSelector';
import OrderNote from './PizzaSelection/OrderNote';
import styles from '../css/PizzaSelectionForm.module.css';
import OrderSummary from './PizzaSelection/OrderSummary';
import { useState } from 'react';

const BASE_PRICE = 85.50;
const TOPPING_PRICE = 5.00;

export default function PizzaSelectionForm() {

  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  
  const totalPrice = (BASE_PRICE + toppings.length * TOPPING_PRICE) * quantity;

  const order = {
    size: size,
    dough: dough,
    toppings: toppings,
    note: note,
    totalPrice: totalPrice,
    toppingsPrice: toppings.length * TOPPING_PRICE
  }



  return (
    <div className={styles.pizzaForm}>
      <div className={styles.pizzaFormContainer}>
        <div className={styles.pizzaFormSizePart}>
          <SizeSelector size={size} setSize={setSize} />
          <DoughSelector dough={dough} setDough={setDough} />
        </div>
        <ToppingsSelector toppings={toppings} setToppings={setToppings} />
        <OrderNote note={note} setNote={setNote} />
        <hr style={{ border: "2px solid #E5E5E5", width: "100%", marginBottom: "20px" }} />
        <OrderSummary
          toppingsPrice={toppings.length * TOPPING_PRICE}
          quantity={quantity}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          order={order}
        />

      </div>
    </div>
  );
}
