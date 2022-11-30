import PropTypes from 'prop-types';
import { useState } from 'react';
import { loginSubmit } from '../service/requests';

function Login({ history }) {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const isDisabled = () => {
    const regex = /\S+@\S+\.\S+/i;
    const MIN_LENGTH = 6;
    return !(regex.test(email) && senha.length >= MIN_LENGTH);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };

  const changeSenha = (value) => {
    setSenha(value);
  };

  const handleSubmit = async () => {
    const body = { email, password: senha };
    const result = await loginSubmit(body);
    if (!result) {
      setInvalid(true);
    } else {
      history.push('/customer/products');
    }
  };

  return (
    <form>
      <input
        data-testid="common_login__input-email"
        type="email"
        placeholder="email"
        value={ email }
        onChange={ (event) => changeEmail(event.target.value) }
      />
      <input
        data-testid="common_login__input-password"
        type="password"
        placeholder="password"
        value={ senha }
        onChange={ (event) => changeSenha(event.target.value) }
      />
      <button
        type="button"
        onClick={ handleSubmit }
        disabled={ isDisabled() }
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      {
        invalid && (
          <div data-testid="common_login__element-invalid-email">
            Email ou senha inválidos
          </div>
        )
      }
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
