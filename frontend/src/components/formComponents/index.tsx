import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 144px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background: var(--background);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 2rem;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 16px;

  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;

    margin-bottom: 1rem;

    color: var(--text-primary);
  }

  label {
    font-size: 0.95rem;
    font-weight: 500;

    color: var(--text-secondary);
  }

  p {
    margin-top: 0.5rem;

    text-align: center;

    color: var(--text-secondary);

    font-size: 0.9rem;

    a {
      color: var(--primary);
      font-weight: 600;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 1rem;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: white;

  font-size: 0.95rem;

  transition: all 0.2s ease;

  &:focus {
    outline: none;

    border-color: var(--primary);

    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }

  &[type="file"] {
    padding: 0.4rem 0.75rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &::file-selector-button {
    margin-right: 1rem;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 6px;
    background: var(--primary);
    color: white;
    font-weight: 500;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  &::file-selector-button:hover {
    background: var(--primary-dark);
  }
`;

export const SubmitButton = styled.button`
  height: 48px;

  margin-top: 1rem;

  border-radius: 10px;

  background: linear-gradient(
    135deg,
    var(--primary),
    var(--primary-dark)
  );

  color: white;

  font-size: 1rem;
  font-weight: 600;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }
`;
