import { useState } from "react";
import styled from "styled-components";

const ProfileIconStyled = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  color: white;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

interface ProfileIconProps {
  profileIcon: string
}

export const ProfileIcon = ({
  profileIcon }: ProfileIconProps) => {

    const [menu, setMenu] = useState(false);
    function handleMenu () {
      setMenu(true);
    }

  return (
    <div>
        <ProfileIconStyled src={profileIcon} />
    </div>
  )
}

