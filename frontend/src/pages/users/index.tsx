import { useEffect, useState } from "react"
import Display from "../../components/Display"
import { Container } from "../../components/formComponents"
import MainTitle from "../../components/MainTitle"
import Loader from "../../components/Loader"
import { getUsers } from "../../services/userService"
import type { iUser } from "../../types"
import UserCard from "../../components/UserCard"
import { ErrorSpan } from "../../components/ErrorSpan"
import Button from "../../components/Button"

const Users = () => {

  const [users, setUsers] = useState<iUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchData() {
    try {
      setLoading(true);
      setError(null)
      const data = await getUsers();
      setUsers(data ?? []);
    } catch (e) {
      setError('Erro ao carregar usuários.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <>
      <MainTitle>Usuários Cadastrados</MainTitle>
      <div style={{ textAlign: 'center', margin: '32px' }}>
        <ErrorSpan>Erro: {error}</ErrorSpan>
        <Button error={true} 
        onClick={fetchData}>Tentar Novamente</Button>
      </div>
    </>
  }

  return (
    <div>
      <MainTitle>Usuários Cadastrados</MainTitle>
      {loading && <Loader />}
      <Container>
        <Display>
          {users.map((user: iUser) => (
            <UserCard user={user} key={user.id} />
          ))}
        </Display>
      </Container>
    </div>
  )
}

export default Users
