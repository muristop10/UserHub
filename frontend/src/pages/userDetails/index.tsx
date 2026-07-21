import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import type { iUser } from '../../types'
import { getUserById } from '../../services/userService'
import { ErrorSpan } from '../../components/ErrorSpan'
import Loader from '../../components/Loader'
import defaultUser from '../../assets/defaultUser.jpg'

const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  color: var(--text-secondary);
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 500;

  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--primary);
    transform: translateX(-4px);
  }
`

const StyledContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;

  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;

  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    text-align: center;
  }
`

const ImageSection = styled.section`
  flex-shrink: 0;
`

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

const UserImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;

  border: 4px solid var(--primary);
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.25);
`

const UserName = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
`

const UserEmail = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: var(--primary-dark);
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const UserBio = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-top: 0.5rem;
`


const UserDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState<iUser | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchUser() {
      if (!id) return
      try {
        const data = await getUserById(id)
        setUser(data);
      } catch (e) {
        console.log('Erro: ', e)
      } finally {
        setLoading(false);
      }
    }

    fetchUser()
  }, [id, navigate])

  let msgError = null
  if (!id) {
    msgError = 'Usuário não encontrado'
  }

  if (loading) {
    return <Loader />
  }

  if (error || !user) {
    return (
      <>
        <StyledBackLink to="/users">← Voltar aos usuários</StyledBackLink>
        <ErrorSpan>Usuário não encontrado.</ErrorSpan>
      </>
    )
  }

  return <>
    {msgError && <ErrorSpan>Usuário não encontrado.</ErrorSpan>}
    <span><StyledBackLink to='/users'>Voltar aos usuários</StyledBackLink></span>
    <StyledContainer>
      <section>
        <UserImg src={user.profileImage || defaultUser} />
      </section>

      <section>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </section>

    </StyledContainer>
  </>
}

export default UserDetails
