import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ProductCardDetail from '../../components/ProductCardDetail';
import { getAllSellers, getSaleById, updateStatusSale } from '../../service/requests';

const colors = { Pendente: '',
  Preparando: 'yellow',
  'Em Trânsito': 'orange',
  Entregue: 'green' };
function CustomerOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(false);
  const { role } = JSON.parse(localStorage.getItem('user'));
  const prefix = `${role}_order_details`;

  useEffect(() => {
    const getData = async () => {
      const data = await getSaleById(id);
      const sellersList = await getAllSellers();
      const sellerFound = sellersList.find((seller) => seller.id === data.sellerId);
      setOrder({ ...data, sellerName: sellerFound?.name });
    };

    getData();
  }, [id]);

  const updateSale = async (status) => {
    await updateStatusSale(status, id);
    const data = await getSaleById(id);
    setOrder(data);
  };

  return (
    <div className="products_page products_container">
      <Header />
      { order && (
        <main className="orders_card">
          <h1>Detalhe do Pedido</h1>
          <p
            data-testid={
              `${prefix}__element-order-details-label-order-id`
            }
          >
            {`PEDIDO ${order.id}`}
          </p>
          <p
            data-testid={
              `${prefix}__element-order-details-label-seller-name`
            }
          >
            {order.sellerName}
          </p>
          <p
            data-testid={
              `${prefix}__element-order-details-label-order-date`
            }
          >
            {moment(order.saleDate).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid={
              `${prefix}__element-order-details-label-delivery-status`
            }
            className={ colors[order.status] }
          >
            {order.status}
          </p>
          <button
            type="button"
            disabled={ order.status !== 'Em Trânsito' }
            onClick={ async () => updateSale('Entregue') }
            data-testid={ `${prefix}__button-delivery-check` }
            className="login_button green"
          >
            MARCAR COMO ENTREGUE
          </button>
          <div className="products_container">
            {order.products.map((product, index) => (
              <ProductCardDetail
                key={ product.name }
                { ...product }
                item={ index + 1 }
              />))}
          </div>
          <p data-testid={ `${prefix}__element-order-total-price` }>
            {`TOTAL: R$ ${order.totalPrice.replace(/\./, ',')}`}
          </p>
        </main>
      )}
    </div>
  );
}

export default CustomerOrdersDetails;
