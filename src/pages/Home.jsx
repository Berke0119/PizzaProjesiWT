import '../reset.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CardSection from '../components/CardSection';
import OrderSection from '../components/OrderSection';

function HomePage(){
  return(
    <>
     <Header/>
     <Navbar/>
     <CardSection/>
     <OrderSection/>
    </>
  );
}

export default HomePage;