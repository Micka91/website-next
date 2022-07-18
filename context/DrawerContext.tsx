import { useState, createContext } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  open?: boolean;
  handleOpen?: () => void;
}

export const DrawerContext = createContext<IContext>({});

const DrawerContextProvider = ({ children }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  const values = {
    open,
    handleOpen,
  };

  return (
    <DrawerContext.Provider value={values}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
