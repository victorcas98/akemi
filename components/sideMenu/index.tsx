import React from "react";
import { Context } from "../../context/context";

import { Container, Logo, LogOut, Menu, MenuItem } from "./styles";

const SideMenu: React.FC = () => {
  const { setPage } = React.useContext(Context)
  return (
    <Container>
      <Logo src="/logo.png" alt="logo" width={500} height={500} />
      <Menu>
        <MenuItem onClick={()=> setPage(0)}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => setPage(1)}>
          Estoque
        </MenuItem>
        <MenuItem onClick={()=> setPage(2)}>
          Caixa
        </MenuItem>
        <LogOut>
          Sair
        </LogOut>
      </Menu>
    </Container>
  );
};
export default SideMenu;
