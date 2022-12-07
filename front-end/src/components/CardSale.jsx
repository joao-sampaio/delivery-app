import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardSale({ id,
  totalPrice, deliveryAddress, deliveryNumber, saleDate, status }) {
  const { role } = JSON.parse(localStorage.getItem('user'));

  return (
    <Link to={ `/${role}/orders/${id}` }>
      <section>
        <p data-testid={ `${role}_orders__element-order-id-${id}` }>{id}</p>
        <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>{status}</p>
        <p data-testid={ `${role}_orders__element-order-date-${id}` }>{saleDate}</p>
        <p data-testid={ `${role}_orders__element-card-price-${id}` }>{totalPrice}</p>
        <p data-testid={ `${role}_orders__element-card-address-${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </section>
    </Link>
  );
}

CardSale.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default CardSale;
