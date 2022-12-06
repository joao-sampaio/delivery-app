import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { getProducts } from '../service/requests';

function Products() {
  // let products = [];
  const history = useHistory();
  localStorage.setItem('cart', JSON.stringify({}));
  // const getCart = () => JSON.parse(localStorage.getItem('cart'));
  const [itemQuantities, setItemQuantites] = useState({});
  const [products, setProducts] = useState([]);
  const getP = async () => {
    if (products.length === 0) {
      setProducts(await getProducts());
    }
  };
  getP();
  const add = (i) => {
    const temp = { ...itemQuantities };
    temp[i] = temp[i] ? temp[i] + 1 : 1;
    setItemQuantites(temp);
    localStorage.setItem('cart', JSON.stringify(temp));
  };
  const remove = (i) => {
    const temp = { ...itemQuantities };
    if (temp[i] && temp[i] > 0) {
      temp[i] -= 1;
    }
    setItemQuantites(temp);
    localStorage.setItem('cart', JSON.stringify(temp));
  };

  const getTotalPrice = () => {
    let totalPrice = 0.00;
    Object.entries(itemQuantities).map((i) => {
      const index = parseInt(i[0], 10);
      totalPrice += parseFloat(products[index].price) * i[1];
      return 0;
    });
    const temp = totalPrice.toFixed(2).toString().replace('.', ',');
    return temp;
  };

  const changeQuantitie = (event) => {
    const { id, value } = event.target;
    // const key = event.target.getAttribute('key');
    const temp = { ...itemQuantities };
    temp[id] = value ? parseInt(value, 10) : 0;
    setItemQuantites(temp);
    localStorage.setItem('cart', JSON.stringify(temp));
  };

  const handleClick = () => {
    console.log(products);
    console.log(itemQuantities);
    const temp = Object.entries(itemQuantities).map((i) => {
      const index = parseInt(i[0], 10);
      return { ...products[index],
        quantity: i[1],
        subtotal: parseFloat(products[index].price) * i[1] };
    });
    localStorage.setItem('cart', JSON.stringify(temp));
    history.push('/customer/checkout');
  };

  return (
    <>
      <Header />
      <div>
        {products.map((p, i) => {
          const price = p.price.replace('.', ',');
          return (
            <div
              key={ i }
            >
              <div>
                <p
                  data-testid={ `customer_products__element-card-price-${p.id}` }
                >
                  {price}
                </p>
                <p
                  data-testid={ `customer_products__element-card-title-${p.id}` }
                >
                  { p.name }
                </p>
                <img
                  style={ { width: '160px' } }
                  alt={ p.name }
                  data-testid={ `customer_products__img-card-bg-image-${p.id}` }
                  src={ p.urlImage }
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={ () => remove(i) }
                  data-testid={ `customer_products__button-card-rm-item-${p.id}` }
                >
                  -
                </button>
                <input
                  id={ i }
                  type="number"
                  data-testid={ `customer_products__input-card-quantity-${p.id}` }
                  onChange={ changeQuantitie }
                  value={ itemQuantities[i] ? itemQuantities[i] : 0 }
                />

                <button
                  onClick={ () => add(i) }
                  type="button"
                  data-testid={ `customer_products__button-card-add-item-${p.id}` }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ getTotalPrice() === '0,00' }
          onClick={ handleClick }
        >
          <p>Ver Carrinho: R$ </p>
          <p
            data-testid="customer_products__checkout-bottom-value"
          >
            { getTotalPrice() }
          </p>
        </button>
      </div>
    </>
  );
}

export default Products;
