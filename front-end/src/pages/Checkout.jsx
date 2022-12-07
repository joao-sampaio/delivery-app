import { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';
import OrderTable from '../components/OrderTable';

function Checkout() {
  const [productsList, setProductsList] = useState([]);
  const totalPrice = productsList.reduce((acc, { subtotal }) => acc + subtotal, 0);

  useEffect(() => {
    setProductsList(JSON.parse(localStorage.getItem('cart')));
  }, []);

  return (
    <>
      <Header />
      <h1>Finalizar Pedido</h1>
      <OrderTable
        productsList={ productsList }
        totalPrice={ totalPrice }
        setProductsList={ setProductsList }
      />
      <OrderDetails
        productsList={ productsList }
        totalPrice={ totalPrice }
      />
    </>
  );
}

export default Checkout;
