import PropTypes from 'prop-types';
import { useState } from 'react';
import { registerSubmit } from '../service/requests';

function Cadastro({ history }) {
  const [invalid, setInvalid] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = () => {
    const regex = /\S+@\S+\.\S+/i;
    const MIN_LENGTH = 6;
    const MIN_LENGTH_NAME = 12;
    return !(regex.test(email)
    && password.length >= MIN_LENGTH && name.length >= MIN_LENGTH_NAME);
  };

  const handleSubmit = async () => {
    const body = { email, password, name };
    const result = await registerSubmit(body);
    if (!result) {
      setInvalid(true);
    } else {
      history.push('/customer/products');
    }
  };

  return (
    <form>
      <h1>Cadastro</h1>
      <input
        data-testid="common_register__input-name"
        type="text"
        placeholder="nome"
        value={ name }
        onChange={ (event) => setName(event.target.value) }
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        placeholder="email"
        value={ email }
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        placeholder="password"
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />
      <button
        type="button"
        disabled={ isDisabled() }
        onClick={ handleSubmit }
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
      {
        invalid && (
          <div data-testid="common_register__element-invalid_register">
            Email ou senha inválidos
          </div>
        )
      }
    </form>
  );
}

Cadastro.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Cadastro;
