import PropTypes from 'prop-types';

const roles = { administrator: 'adm', seller: 'seller', customer: 'customer' };
function UserInfo({ name, email, role, item, handleDelete }) {
  // const classN = "user_card" + roles[role]
  return (
    <div className={ `users_card ${roles[role]}` }>
      <p data-testid={ `admin_manage__element-user-table-item-number-${item}` }>{item}</p>
      <p data-testid={ `admin_manage__element-user-table-name-${item}` }>{name}</p>
      <p data-testid={ `admin_manage__element-user-table-email-${item}` }>{email}</p>
      <p data-testid={ `admin_manage__element-user-table-role-${item}` }>{role}</p>
      <button
        data-testid={ `admin_manage__element-user-table-remove-${item}` }
        type="button"
        onClick={ handleDelete }
        className="users_button"
      >
        Excluir
      </button>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  item: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default UserInfo;
