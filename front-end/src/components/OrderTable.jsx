function OrderTable() {
  return (
    <>
      <h1>Finalizar Pedido</h1>
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
          { [].map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                index
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                name
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                quantity
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                price
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                price * quantity
              </td>
              <td>
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  type="button"
                  onClick={ () => null }
                >
                  Remover
                </button>
              </td>
            </tr>)) }
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price">Total: R$</p>
    </>
  );
}

export default OrderTable;
