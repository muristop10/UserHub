import type React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  error?: boolean;
  children?: React.ReactNode,
  onClick?: () => void
}

const StyledButton = styled.button<ButtonProps>`
  margin-top: 16px;

  padding: 0.9rem 1.4rem;

  border-radius: 8px;
  border: 2px solid #6366f1;

  background: #6366f1;
  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 600;

  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
    border-color: #4f46e5;
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ error }) =>
    error &&
    css`
      background: transparent;
      color: #ef4444;
      border-color: #ef4444;

      &:hover {
        background: #ef4444;
        color: #ffffff;
        border-color: #ef4444;
      }
    `}
`;

const Button = ({
    children,
    onClick,
    error
}:ButtonProps) => {
  return (
    <StyledButton onClick={onClick}
    error={error}>
      {children}
    </StyledButton>
  )
}

export default Button
