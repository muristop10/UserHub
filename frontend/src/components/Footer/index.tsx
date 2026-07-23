
import { FaDiscord, FaInstagram, FaTwitch, FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    135deg,
    #0f172a,
    #111827,
    #1e1b4b
  );

  color: #fff;

  margin-top: auto;

  > div:first-child {
    padding-top: 2rem;

    ul {
      display: flex;
      gap: 1.5rem;
    }

    a {
      color: #cbd5e1;
      font-size: 1.8rem;

      transition: 0.3s;

      &:hover {
        color: #6366f1;
        transform: translateY(-3px);
      }
    }
  }

  > div:nth-child(2) {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
      color: #6366f1;
      margin-bottom: 0.5rem;
    }

    p {
      color: #cbd5e1;
      font-size: 0.95rem;
    }
  }

  section {
    width: 100%;

    margin-top: 2rem;
    padding: 1rem;

    display: flex;
    justify-content: center;

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    span {
      color: #94a3b8;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    > div:first-child ul {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    > div:nth-child(2) {
      padding: 0 1rem;
      text-align: center;
    }

    a {
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <ul>
          <NavLink to="#"><FaInstagram /></NavLink>
          <NavLink to="#"><FaTwitch /></NavLink>
          <NavLink to="#"><FaWhatsapp /></NavLink>
          <NavLink to="#"><FaDiscord /></NavLink>
        </ul>
      </div>

    <div>
      <h3>Informações</h3>
      <p>+55 54 99684-8291</p>
      <p>Rua das Couves, Chapecó, 293</p>
      <p>email@contato.com</p>
    </div>

      <section>
        <span>
          Desenvolvido por Murilo Thomé.
        </span>
      </section>
    </StyledFooter>
  )
}

export default Footer
