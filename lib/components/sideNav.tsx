"use client";

import { useState } from "react";
import CenterPanel from "./center_panel";
import ContactForm from "./contact";

import { IoMail } from "react-icons/io5";
import MenuButton from "./menu_button";
const SideMenu = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <MenuButton isOpen={state} onClose={setState}>
        <IoMail color="white" />
      </MenuButton>

      {state && (
        <CenterPanel onClose={setState}>
          <ContactForm />
        </CenterPanel>
      )}
    </>
  );
};

export default SideMenu;
