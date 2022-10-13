import { createContext, useState } from "react";
import AlertModal from "../components/AlertModal";

const AlertModalContext = createContext();

const AlertModalProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [content, setContent] = useState("");

  const show = (text) => {
    setContent(text);
    setIsOpened(true);
    setTimeout(() => {
      setIsOpened(false);
    }, 2900);
  };

  return (
    <AlertModalContext.Provider value={{ show }}>
      {isOpened && <AlertModal content={content} />}
      {children}
    </AlertModalContext.Provider>
  );
};

export { AlertModalContext, AlertModalProvider };
