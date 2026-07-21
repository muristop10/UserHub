
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 144px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  padding: 2rem;

  text-align: center;

  img {
    width: 100%;
    max-width: 450px;
  }
`;

const NotFoundTitle = styled.h2`
  font-family: "Poppins", sans-serif;

  font-size: 2rem;
  font-weight: 600;

  color: var(--text-primary);

  letter-spacing: -0.03em;

  span {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);

  font-size: 1rem;

  max-width: 500px;

  line-height: 1.6;
`;

export const ReturnButton = styled.button`
  background: transparent;
  color: #c4b5fd;

  border: 1px solid #c4b5fd;
  border-radius: 12px;

  padding: 0.75rem 1.25rem;

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: #c4b5fd;
    color: #4c1d95;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(196, 181, 253, 0.25);
  }
`;

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <img src='src/assets/logo.svg '
            alt='Cachorro sobre uma página destruída.'
            width={20} />
            <NotFoundTitle>Ops. Essa página não foi encontrada.</NotFoundTitle>
            <Subtitle>Tente buscar por outras opções.</Subtitle>
            <ReturnButton onClick={() => navigate('/')}>Tenta voltar para o início.</ReturnButton>
        </Container>
    )
}

export default NotFound
