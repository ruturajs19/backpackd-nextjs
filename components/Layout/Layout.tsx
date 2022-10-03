import React, { FC } from "react";
import Header from "../Header/Header";
import { MainContainer, AppWrapper } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props): JSX.Element => {
  const { children } = props;
  return (
    <AppWrapper>
      <Header />
      <MainContainer>{children}</MainContainer>
    </AppWrapper>
  );
};

export default Layout;
