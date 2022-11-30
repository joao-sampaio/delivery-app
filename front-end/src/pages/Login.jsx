import { useState } from 'react';
import { loginSubmit } from '../service/requests';

function Login() {
  const [invalid, setInvalid] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // const validateEmailAndSenha = () => {
  //   const regex = /\S+@\S+\.\S+/i;
  //   const MIN_LENGTH = 6;
  //   if (regex.test(email) && senha.length >= MIN_LENGTH) {
  //     setIsDisabled(false);
  //   } else {
  //     setIsDisabled(true);
  //   }
  //   console.log(senha)
  //   setIsDisabled(!(regex.test(email) && senha.length >= MIN_LENGTH))
  // };

  const isDisabled = () => {
    const regex = /\S+@\S+\.\S+/i;
    const MIN_LENGTH = 6;
    return !(regex.test(email) && senha.length >= MIN_LENGTH);
  };

  const changeEmail = (value) => {
    setEmail(value);
    // validateEmailAndSenha();
  };

  const changeSenha = (value) => {
    setSenha(value);
    // validateEmailAndSenha();
  };

  const handleSubmit = async () => {
    const body = { email, password: senha };
    try {
      const result = await loginSubmit(body);
      console.log(result);
    } catch (err) {
      setInvalid(true);
      // console.log(err.message);
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

export default Login;
