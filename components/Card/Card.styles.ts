import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #ffff;
  height: 30rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardHeading = styled.h2`
  color: #000;
  margin: 0 10%;
`;

export const CardVerbiage = styled.div`
  color: gray;
  text-align: justify;
  margin: 5% 10%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20%;
`;

export const CoverImgWrapper = styled.div<{ isProfile: boolean }>`
  height: ${({ isProfile }) => (isProfile ? "30%" : "50%")};
  overflow: hidden;
  margin-bottom: ${({ isProfile }) => (isProfile ? "20%" : "0")};
`;

export const ProfileIconWrapper = styled.div`
  height: 7.55rem;
  width: 7.5rem;
  position: absolute;
  top: 20%;
  left: 30%;
`;

export const ProfileIcon = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
`;
