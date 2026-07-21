import React, { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;
  height: 42px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.08);

  padding: 0 1rem;

  color: white;

  outline: none;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #6366f1;
  }
`;

interface InputProps {
    placeholder?: string,
    type?: string,
    value?: string
}

const InputUserSearch = (
    {
        placeholder,
        type = 'text',
    } : InputProps
) => {

  const [value, setValue] = useState('');

  function handleChange (e :  React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <SearchInput placeholder={placeholder}
    type={type}
    value={value}
    onChange={handleChange}/>
  )
}

export default InputUserSearch
