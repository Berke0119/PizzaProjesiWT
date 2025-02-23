import OrderHeader from '../components/OrderHeader';
import PizzaDetail from '../components/PizzaDetail';
import PizzaSelectionForm from '../components/PizzaSelectionForm';

export default function OrderForm(){
  return(
    <>
      <OrderHeader/>
      <PizzaDetail/>
      <PizzaSelectionForm/>
    </>
  );
}
