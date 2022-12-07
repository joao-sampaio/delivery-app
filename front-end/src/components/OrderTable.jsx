import PropTypes from 'prop-types';

function OrderTable({ productsList, setProductsList, totalPrice }) {
  const removeProduct = (id) => {
    const newCart = productsList.filter((product) => product.id !== id);
    setProductsList(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          { productsList.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {product.price.toFixed(2).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {product.subtotal.toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  type="button"
                  onClick={ () => removeProduct(product.id) }
                >
                  Remover
                </button>
              </td>
            </tr>)) }
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
      </p>
    </>
  );
}

OrderTable.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    subtotal: PropTypes.number,
    urlImage: PropTypes.string,
  })).isRequired,
  setProductsList: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderTable;
