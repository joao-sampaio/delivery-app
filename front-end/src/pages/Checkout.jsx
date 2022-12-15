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
    <div className="products_page">
      <Header />
      <div className="">
        <h1>Finalizar Pedido</h1>
        <div className="receipt">
          <OrderTable
            productsList={ productsList }
            totalPrice={ totalPrice }
            setProductsList={ setProductsList }
          />
        </div>
        <div className="details_form">
          <OrderDetails
            productsList={ productsList }
            totalPrice={ totalPrice }
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
