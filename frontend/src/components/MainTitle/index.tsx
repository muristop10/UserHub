import styled from "styled-components";

export const MainTitleStyled = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto;
  text-align: center;
  max-width: 900px;

  color: var(--text-primary);
  background: linear-gradient(
    135deg, 
    var(--text-primary) 30%, 
    var(--primary) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    gap: 0.75rem;
    
    &::before {
      width: 10px;
      height: 10px;
    }
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
