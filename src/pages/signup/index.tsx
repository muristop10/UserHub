
import { Container, Form, Input, SubmitButton } from '../../components/formComponents'



const SignUp = () => {
  return (
    <div>
      <Container>
        <Form>
          <h3>Cadastre-se já!</h3>

          <label htmlFor='nome'>Nome:</label>
          <Input />
          <label htmlFor='email'>Email:</label>
          <Input />
          <label htmlFor='dataNasc'>Data de Nascimento:</label>
          <Input type='date' />
          <label htmlFor='password'>Senha:</label>
          <Input type='password' />
          <label htmlFor='nome'>Confirmar Senha:</label>
          <Input type='password' />

          <SubmitButton>Cadastrar-se</SubmitButton>
        </Form>
      </Container>

    </div>
  )
}

export default SignUp
