import { NavLink, useHistory } from 'react-router-dom';

function Header() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  let navName = '';
  let path = '';
  switch (role) {
  case 'seller':
    navName = 'PEDIDOS';
    path = '/seller/orders';
    break;
  case 'administrator':
    navName = 'GERENCIAR USUÁRIOS';
    path = '/admin/manage';
    break;
  default:
    navName = 'MEUS PEDIDOS';
    path = '/customer/orders';
    break;
  }

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <header className="header">
      <ul>
        { role === 'customer' && (
          <li>
            <NavLink
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              <h2>PRODUTOS</h2>
            </NavLink>
          </li>
        ) }
        <li>
          <NavLink
            to={ path }
            data-testid="customer_products__element-navbar-link-orders"
          >
            <h2>{ navName }</h2>
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
            onClick={ logout }
            className="header_button"
          >
            Sair
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
