import { Suspense, useEffect, useState } from "react"
import Display from "../../components/Display"
import { Container } from "../../components/formComponents"
import MainTitle from "../../components/MainTitle"
import Loader from "../../components/Loader"
import { getUsers } from "../../services/userService"
import { ErrorSpan } from "../../components/ErrorSpan"
import type { iUser } from "../../types"
import UserCard from "../../components/UserCard"

const Users = () => {

  const [users, setUsers] = useState<iUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData () {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (e) {
        console.log('Erro: ', e)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, []) 

  return (
    <div>
      <MainTitle>Usuários Cadastrados</MainTitle>
      <Container>
        <Display>
          {loading ? <Loader />
          : users.map((user:iUser) => (
            <UserCard user={user} key={user.id}/>
          ))}
        </Display>
      </Container>
    </div>
  )
}

export default Users
