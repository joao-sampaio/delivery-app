import moment from 'moment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ProductCardDetail from '../../components/ProductCardDetail';
import { getSaleById, updateStatusSale } from '../../service/requests';

const TEST_ID_GIG = 'seller_order_details__element-order-details-label-delivery-status';

function SellerOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getSaleById(id);
      setOrder(data);
    };

    getData();
  }, [id]);

  const updateSale = async (status) => {
    await updateStatusSale(status, id);
    const data = await getSaleById(id);
    setOrder(data);
  };

  return (
    <>
      <Header />
      { order && (
        <main>
          <p data-testid="seller_order_details__element-order-details-label-order-id">
            PEDIDO
            {' '}
            {order.id}
          </p>
          <p data-testid="seller_order_details__element-order-details-label-order-date">
            {moment(order.saleDate).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid={ TEST_ID_GIG }
          >
            {order.status}
          </p>
          <button
            type="button"
            disabled={ order.status !== 'Pendente' }
            onClick={ async () => updateSale('Preparando') }
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar pedido
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ async () => updateSale('Em Trânsito') }
            disabled={ order.status !== 'Preparando' }
          >
            Saiu para entrega
          </button>
          {
            order.products
              .map((product, index) => (
                <ProductCardDetail
                  key={ product.name }
                  { ...product }
                  item={ index + 1 }
                />))
          }
          <p>
            {' '}
            TOTAL: R$
            {' '}
            <span data-testid="seller_order_details__element-order-total-price">
              {order.totalPrice.replace(/\./, ',')}
            </span>
          </p>
        </main>
      )}
    </>
  );
}

export default SellerOrdersDetails;
