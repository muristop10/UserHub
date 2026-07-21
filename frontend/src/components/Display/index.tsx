import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e1b4b 50%,
    #312e81 100%
  );

  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);

  box-shadow: 
    0 20px 25px -5px rgba(15, 23, 42, 0.4),
    0 8px 10px -6px rgba(99, 102, 241, 0.15);

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
    border-radius: 12px;
  }
`

const Display = ({children}:{children:React.ReactNode}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Display
