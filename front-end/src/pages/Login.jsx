import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { loginSubmit } from '../service/requests';
import '../App.css';
// import can1 from '../images/can1.svg';
// import can2 from '../images/can2.svg';

function Login({ history }) {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      if (userData.role === 'seller') return history.push('/seller/orders');
      if (userData.role === 'customer') return history.push('/customer/products');
      history.push('/admin/manage');
    }
  }, [history]);

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
      localStorage.setItem('user', JSON.stringify(result.data));
      if (result.data.role === 'seller') return history.push('/seller/orders');
      if (result.data.role === 'customer') return history.push('/customer/products');
      history.push('/admin/manage');
    }
  };

  return (
    <div className="App">
      <span className="logo">PLACEHOLDER</span>

      {/* <div className="imagesContainer">
        <img className="can1" src={ can1 } alt="can1" />
        <img className="can2" src={ can2 } alt="can2" />
      </div> */}
      <form className="login_form">
        <input
          data-testid="common_login__input-email"
          type="email"
          placeholder="email"
          value={ email }
          onChange={ (event) => changeEmail(event.target.value) }
          className="login_input"
          autoComplete="email"
        />
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="password"
          value={ senha }
          onChange={ (event) => changeSenha(event.target.value) }
          className="login_input"
          autoComplete="current-password"
        />
        {/* <div className="login_input"> */}
        <button
          type="button"
          onClick={ handleSubmit }
          disabled={ isDisabled() }
          data-testid="common_login__button-login"
          className="login_button"
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
          className="header_button"
        >
          Ainda não tenho conta
        </button>
        {/* </div> */}
        {
          invalid && (
            <div data-testid="common_login__element-invalid-email">
              Email ou senha inválidos
            </div>
          )
        }
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
