import { Link } from 'react-router-dom'
import { Container, Form, Input, SubmitButton } from '../../components/formComponents'
import { useState } from 'react';
import { ErrorSpan } from '../../components/ErrorSpan';

const Login = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleSubmit (e : React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsAuthenticated(true);
  }

  return (
    <Container>
      <Form>
        <h3>Faça login na plataforma.</h3>

        <label htmlFor='email'>Email</label>
          <Input id='email'
          type='email' />

        <label htmlFor='password'>Senha</label>
          <Input id='password' 
          type='password' />

        <SubmitButton onClick={handleSubmit}>Logar</SubmitButton>
        {(isAuthenticated && <ErrorSpan>Erro ao logar.</ErrorSpan>)}
        <p>Ainda não tem cadastro? <span><Link to='/signup'>Cadastre-se agora!</Link></span></p>
      </Form>
    </Container>
  )
}

export default Login
