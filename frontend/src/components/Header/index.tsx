
import { Link } from 'react-router-dom'
import { IoIosNotifications } from "react-icons/io";
import { ProfileIcon } from '../ProfileIcon';
import InputUserSearch from '../InputUserSearch';
import styled from "styled-components";
import Logo from '../Logo';

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 72px;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: linear-gradient(
    135deg,
    #0f172a,
    #111827,
    #1e1b4b
  );

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);

  color: white;

  figure {
    flex-shrink: 0;

    img {
      height: 54px;
      display: block;
      cursor: pointer;
    }
  }

  nav {
    flex: 1;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
  }

  li {
    cursor: pointer;

    color: #cbd5e1;

    font-size: 0.7rem;
    font-weight: 500;

    transition: 0.3s;

    &:hover {
      color: #6366f1;
    }
  }

  .search {
    width: 100%;
    max-width: 350px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    flex-shrink: 0;
  }

  .actions svg {
    font-size: 1.75rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    transition: 0.3s;

    &:hover {
      color: #6366f1;
    }
  }

  .options li a {
    font-size: 1rem;
  }

  /* TABLET */

  @media (max-width: 992px) {
    gap: 1rem;

    ul {
      gap: 1rem;
    }

    .search {
      max-width: 220px;
    }
  }

  /* MOBILE */

  @media (max-width: 768px) {
    flex-wrap: wrap;

    height: auto;

    padding: 1rem;

    figure {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    nav {
      width: 100%;
      order: 2;
    }

    ul {
      justify-content: center;
    }

    .search {
      width: 100%;
      max-width: 100%;

      order: 3;
    }

    .actions {
      width: 100%;

      justify-content: center;

      order: 4;
    }
  }

  /* CELULARES PEQUENOS */

  @media (max-width: 480px) {
    ul {
      gap: 0.75rem;
    }

    li {
      font-size: 0.7rem;
    }

    figure img {
      height: 44px;
    }

    a {
      font-size: 1.5rem;
    }
  }
`;


const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <Link to='/'>
          <Logo src='src/assets/logo.svg' alt='Logo' />
        </Link>
      </figure>

      <nav>
        <ul className='options'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Cadastro</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </nav>

      <div className="search">
        <InputUserSearch placeholder='Busque por usuários...' 
        isAuthenticated={false}/>
      </div>

      <div className="actions">
        <Link to="#">
          <IoIosNotifications />
        </Link>

        <ProfileIcon profileIcon='#' />
      </div>
    </StyledHeader>
  )
}

export default Header
