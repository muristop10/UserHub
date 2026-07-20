import styled from "styled-components";

const MainTitleStyled = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 16px;

  color: var(--text-primary);

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: .75rem;

  &::before {
    content: "";
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--primary);
  }
`;

const MainTitle = ({children} : {children: React.ReactNode}) => {
  return (
    <MainTitleStyled>
        {children}
    </MainTitleStyled>
  )
}

export default MainTitle
