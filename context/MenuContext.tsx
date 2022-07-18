import { useState, createContext } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  menuOpen?: boolean;
  handleOpenMenu?: () => void;
}

export const MenuContext = createContext<IContext>({});

const MenuContextProvider = ({ children }: IProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenuOpen((open) => !open);
  };

  const values = {
    menuOpen,
    handleOpenMenu,
  };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
