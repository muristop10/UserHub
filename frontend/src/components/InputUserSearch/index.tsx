import React, { useState } from 'react'
import styled from 'styled-components'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const SearchInput = styled.input`
  width: 100%;
  height: 42px;

  border: ${props => props.disabled ? '1px solid rgba(255, 0, 0, 0.643);' : '1px solid rgba(255, 255, 255, 0.1);'} ;
  border-radius: 999px;

  background: ${props => props.disabled ? 'rgba(255, 0, 0, 0.376);' : 'rgba(255, 255, 255, 0.08)'} ;

  padding: 0 1rem;

  color: white;

  outline: none;

  &::placeholder {
    ${props => props.disabled ? 'rgba(255, 0, 0, 0.643);' : 'white'} ;
  }

  &:focus {
    border-color: #6366f1;
  }
`;

interface InputProps {
  placeholder?: string,
  type?: string,
  value?: string,
  isAuthenticated: boolean
}

const InputUserSearch = (
  {
    placeholder,
    type = 'text',
    isAuthenticated
  }: InputProps
) => {

  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function handleClick() {
    if (!isAuthenticated) {
      return (
        toast.error('Input inválido! Faça login para utilizar!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        })
      )
    }
  }

  return (
    <>
      <SearchInput 
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        readOnly={!isAuthenticated}
        onClick={handleClick} />
    </>
  )
}

  export default InputUserSearch
