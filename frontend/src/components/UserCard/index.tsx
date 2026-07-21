import styled from 'styled-components'
import type { iUser } from '../../types'
import { Link } from 'react-router-dom'
import defaultUser from '../../assets/defaultUser.jpg'


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;

  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);

  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    box-shadow: 0 12px 20px -3px rgba(99, 102, 241, 0.15);
  }
`

const StyledImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  border: 3px solid var(--primary);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.2);
`

const StyledName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`

const StyledBio = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`


interface UserCardProps {
  user: iUser
}

const UserCard = ({ user }: UserCardProps) => {



  const urlUserDetails = `/users/${user.id}`

  return (
    <Link to={urlUserDetails} >
      <StyledDiv>
        <StyledName>{user.name}</StyledName>
        <StyledImg src={user.profileImage || defaultUser} />
        <StyledBio>{user.bio}</StyledBio>
      </StyledDiv>
    </Link >
  )
}

export default UserCard
