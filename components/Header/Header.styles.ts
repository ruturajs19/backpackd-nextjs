import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  background-color: #0070f3;
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavBarLeftSection = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffff;
  width: 50%;
`;

export const NavBarRightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`;

export const NavBarActionItem = styled.div<{
  isActive: boolean;
}>`
  border-bottom: 0.25rem solid #fff;
  border-color: ${({ isActive }) => (isActive ? "#fff" : "#0070f3")};
  color: #fff;
  margin-right: 2%;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  width: 5rem;
  justify-content: space-around;
`;
