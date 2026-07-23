
import { useState } from 'react';
import { ErrorSpan } from '../../components/ErrorSpan'
import { Container, Form, Input, SubmitButton } from '../../components/formComponents'

const SignUp = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleSubmit (e : React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <Form>
          <h3>Cadastre-se já!</h3>

          <label htmlFor='nome'>Nome:</label>
          <Input id='nome' required/>

          <label htmlFor='email'>Email:</label>
          <Input id='email' required/>

          <label htmlFor='dataNasc'>Data de Nascimento:</label>
          <Input id='dataNasc' type='date' required/>

          <label htmlFor='senha'>Senha:</label>
          <Input id='senha' type='password' required/>

          <label htmlFor='confSenha'>Confirmar Senha:</label>
          <Input id='confSenha' type='password' required/>

          <label htmlFor='imgPerfil'>Imagem de Perfil:</label>
          <Input id='imgPerfil' type='file' accept='image/*'/>

          <SubmitButton onClick={handleSubmit}>Cadastrar-se</SubmitButton>
          {/* {(isAuthenticated && <ErrorSpan>Erro ao logar.</ErrorSpan>)} */}
        </Form>
      </Container>

    </div>
  )
}

export default SignUp
