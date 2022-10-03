import Image from "next/image";
import React, { FC } from "react";
import {
  CardFooter,
  CardHeading,
  CardVerbiage,
  CardWrapper,
  CoverImgWrapper,
  ProfileIcon,
  ProfileIconWrapper,
} from "./Card.styles";
import DefaultAvatar from "../../assets/default-avatar.png";
import SamplePlace from "../../assets/italy.webp";
import Button from "../Button/Button";

interface CardProps {
  isProfile: boolean;
  clickHandler: () => void;
}

const Card: FC<CardProps> = ({ isProfile, clickHandler }): JSX.Element => {
  return (
    <CardWrapper onClick={clickHandler}>
      <CoverImgWrapper isProfile={isProfile}>
        <Image src={SamplePlace} />
      </CoverImgWrapper>

      {isProfile && (
        <ProfileIconWrapper>
          <ProfileIcon src={DefaultAvatar} />
        </ProfileIconWrapper>
      )}
      <CardHeading>Name</CardHeading>
      <CardVerbiage>
        This is description about the user in short.This is description about
        the user in short.This is description about the user in short.
      </CardVerbiage>
      <CardFooter>
        <Button>Find out more</Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
