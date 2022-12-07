import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSellers, registerSale } from '../service/requests';

function OrderDetails({ productsList, totalPrice }) {
  const history = useHistory();
  const [sellersList, setSellersList] = useState([]);
  const [currentSeller, setCurrentSeller] = useState('0');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  useEffect(() => {
    (async () => {
      setSellersList(await getAllSellers());
    })();
  }, []);

  const finishOrder = async () => {
    productsList.map(({ id, quantity }) => ({ id, quantity }));
    const { email, role } = JSON.parse(localStorage.getItem('user'));
    const date = new Date();
    const body = [{
      userEmail: email,
      sellerId: Number(currentSeller),
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: `${date.toISOString().split('T')[0]} ${date.toLocaleTimeString()}`,
      status: 'Pendente',
    }, {
      productsList,
    }];
    const { saleId } = await registerSale(body);
    history.push(`/${role}/orders/${saleId}`);
  };

  return (
    <>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="select-seller">
          P. Vendedora Responsável:
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
            value={ currentSeller }
            onChange={ ({ target }) => setCurrentSeller(target.value) }
          >
            <option value="0" disabled hidden>Escolha uma P. Vendedora</option>
            {sellersList.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="input-address">
          Endereço
          <input
            id="input-address"
            data-testid="customer_checkout__input-address"
            type="text"
            value={ deliveryAddress }
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
        </label>
        <label htmlFor="input-address-number">
          Número
          <input
            id="input-address-number"
            data-testid="customer_checkout__input-address-number"
            type="number"
            value={ deliveryNumber }
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ finishOrder }
          disabled={ currentSeller === '0' || deliveryAddress === '' }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}

OrderDetails.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    subtotal: PropTypes.number,
    urlImage: PropTypes.string,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderDetails;
