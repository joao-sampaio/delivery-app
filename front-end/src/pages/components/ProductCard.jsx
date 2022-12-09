const { useState } = require('react');

const products = [];
function Products() {
  const [itemQuantities, setItemQuantites] = useState({});
  const add = (i) => {
    const temp = itemQuantities;
    temp[i] = temp[i] ? temp[i] + 1 : 1;
  };
  const remove = (i) => {
    const temp = itemQuantities;
    if (temp[i] && temp[i] > 0) {
      temp[i] -= 1;
    }
  };
  return (
    <div>
      {products.map((p, i) => {
        const itemq = itemQuantities[i] | 0;
        return (
          <div
            id={ i }
          >
            <div>
              <p
                data-testid={ `customer_products__element-card-price-${p.id}` }
              >
                {p.price}
              </p>
              <p
                data-testid={ `customer_products__element-card-title-${p.id}` }
              >
                {p.name}
              </p>
              <img
                alt={ p.img }
                data-testid={ `customer_products__img-card-bg-image-${p.id}` }
                src={ p.src }
              />
            </div>
            <div>
              <button
                data-testid={ `customer_products__button-card-rm-item-${id}` }
              >
                -
              </button>
              <p
                data-testid={ `customer_products__input-card-quantity-${id}` }
              >
                {itemQuantities[i] ? itemQuantities[i] : 0}
              </p>
              <button
                data-testid={ `customer_products__button-card-add-item-${id}` }
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
