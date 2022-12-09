import PropTypes from 'prop-types';

function UserInfo({ name, email, role, item, handleDelete }) {
  return (
    <div>
      <p data-testid={ `admin_manage__element-user-table-item-number-${item}` }>{item}</p>
      <p data-testid={ `admin_manage__element-user-table-name-${item}` }>{name}</p>
      <p data-testid={ `admin_manage__element-user-table-email-${item}` }>{email}</p>
      <p data-testid={ `admin_manage__element-user-table-role-${item}` }>{role}</p>
      <button
        data-testid={ `admin_manage__element-user-table-remove-${item}` }
        type="button"
        onClick={ handleDelete }
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
