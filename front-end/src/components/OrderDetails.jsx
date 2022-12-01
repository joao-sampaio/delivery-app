function OrderDetails() {
  return (
    <>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="select-seller">
          P. Vendedora Responsável:
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
          >
            {[].map((seller) => (
              <option key={ seller.seller_id }>
                {seller.seller_id}
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
          />
        </label>
        <label htmlFor="input-address-number">
          Número
          <input
            id="input-address-number"
            data-testid="customer_checkout__input-address-number"
            type="number"
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}

export default OrderDetails;
