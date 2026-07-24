import { Container, Form, Input, SubmitButton } from '../../components/formComponents'
import { createUser } from '../../services/userService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastDone, toastError } from '../../utils/toast';

const SignUp = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dataNasc: new Date,
    password: '',
    confirmPassword: '',
    profileImage: '',
    bio: ''
  })

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const {id, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

   async function handleSubmit (e :React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await createUser(formData)
      toastDone('Cadastrado com sucesso! Faça login!')
      navigate('/login')
    } catch (e) {
      toastError(
        e instanceof Error ?
        e.message :
        'Erro ao enviar formulário.')
    }
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h3>Cadastre-se já!</h3>

          <label htmlFor='name'>Nome:</label>
          <Input id='name' required
          onChange={handleChange}/>

          <label htmlFor='email'>Email:</label>
          <Input id='email' required
          onChange={handleChange}/>

          <label htmlFor='dataNasc'>Data de Nascimento:</label>
          <Input id='dataNasc' type='date' required
          onChange={handleChange}/>

          <label htmlFor='password'>Senha:</label>
          <Input id='password' type='password' required
          onChange={handleChange}/>

          <label htmlFor='confirmPassword'>Confirmar Senha:</label>
          <Input id='confirmPassword' type='password' required
          onChange={handleChange}/>

          {/* <label htmlFor='imgPerfil'>Imagem de Perfil:</label>
          <Input id='imgPerfil' type='file' accept='image/*'/> */}

          <SubmitButton type='submit'>Cadastrar-se</SubmitButton>
        </Form>
      </Container>

    </div>
  )
}

export default SignUp
