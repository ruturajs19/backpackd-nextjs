import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  NavBar,
  NavBarActionItem,
  NavBarLeftSection,
  NavBarRightSection,
} from "./Header.styles";

const Header: FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const navItems = [
    { label: "Places", private: true, route: "/places" },
    { label: "Add Place", private: true, route: "/places" },
    { label: "Login", private: false, route: "/authenticate" },
  ];
  const { push } = useRouter();
  const [session, loading] = useSession();

  console.log("session:", session, loading);
  return (
    <NavBar>
      <NavBarLeftSection>Backpackd</NavBarLeftSection>
      <NavBarRightSection>
        {navItems.map((item, index) => {
          if(item.private && !session) return;
          return (
            <NavBarActionItem
              key={index}
              isActive={index === activeIndex}
              onClick={() => {
                push(item.route);
                setActiveIndex(index);
              }}
            >
              {item.label}
            </NavBarActionItem>
          );
        })}
      </NavBarRightSection>
    </NavBar>
  );
};

export default Header;
