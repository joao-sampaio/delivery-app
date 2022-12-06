import PropTypes from 'prop-types';

function ProductCardDetail({ item, name, price, SaleProduct: { quantity } }) {
  const { role } = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <p
        data-testid={ `${role}_order_details__element-order-table-item-number-${item}` }
      >
        {item}
      </p>
      <p
        data-testid={ `${role}_order_details__element-order-table-name-${item}` }
      >
        {name}
      </p>
      <p
        data-testid={ `${role}_order_details__element-order-table-quantity-${item}` }
      >
        {quantity}
      </p>
      <p
        data-testid={ `${role}_order_details__element-order-table-unit-price-${item}` }
      >
        {price}
      </p>
      <p
        data-testid={ `${role}_order_details__element-order-table-sub-total-${item}` }
      >
        {(price * quantity).toFixed(2)}
      </p>
    </section>
  );
}

ProductCardDetail.propTypes = {
  item: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  SaleProduct: PropTypes.shape({
    quantity: PropTypes.string,
  }),
}.isRequired;

export default ProductCardDetail;
