import styled from 'styled-components'

const StyledSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;
`;

const LoaderDiv = styled.div`
    height: 15px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
    background: 
        var(--_g) left, 
        var(--_g) right;
    background-size: 25% 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;

    &::before,
    &::after {
      content: "";
      height: inherit;
      aspect-ratio: 1;
      
      grid-area: 1/1;
      margin: auto;
      border-radius: 50%;
      transform-origin: -100% 50%;
      background: #000;
      animation: l49 1s infinite linear;
    }

    &::after {
    transform-origin: 200% 50%;
    --s:-1;
    animation-delay: -.5s;
    }

    @keyframes l49 {
      58%,
      100% {transform: rotate(calc(var(--s,1)*1turn))}
    }
`

const Loader = () => {
  return (
    <StyledSection>
      <LoaderDiv></LoaderDiv>
    </StyledSection>
  )
}

export default Loader
