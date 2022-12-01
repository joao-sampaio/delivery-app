import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Header() {
  const { user: { name } } = useContext(UserContext);

  return (
    <header>
      <ul>
        <li>
          <NavLink
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            <h2>PRODUTOS</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <h2>MEUS PEDIDOS</h2>
          </NavLink>
        </li>
        <li>
          <h2 data-testid="customer_products__element-navbar-user-full-name">
            { name }
          </h2>
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ () => null }
          >
            Sair
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
