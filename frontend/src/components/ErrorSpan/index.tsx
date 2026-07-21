import styled from "styled-components";

const StyledErrorSpan = styled.span`
  display: block;

  margin-top: 0.25rem;

  color: #ef4444;

  font-size: 0.875rem;
  font-weight: 500;
  align-self: center;
  line-height: 1.4;
`;

export const ErrorSpan = ({children} : {children: React.ReactNode}) => {
  return (
    <StyledErrorSpan>
      {children}
    </StyledErrorSpan>
  );

}

