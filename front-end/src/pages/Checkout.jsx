import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';
import OrderTable from '../components/OrderTable';

function Checkout() {
  return (
    <>
      <Header />
      <OrderTable />
      <OrderDetails />
    </>
  );
}

export default Checkout;
