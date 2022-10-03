import React, { FC } from "react";
import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
  height?: string;
  clickHandler?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  width,
  height,
  clickHandler,
}): JSX.Element => {
  return (
    <ButtonWrapper type={type} width={width} height={height} onClick={clickHandler}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
