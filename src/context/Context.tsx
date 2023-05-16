import { createContext } from "react";
import { IData } from "../App";

const Context = createContext<IData>({
  chats: [],
  currentChat: "",
  idMessage: "",
  messages: [],
  addChat: () => {},
  startChat: () => {},
  addIdChat: () => {},
  addMessages: () => [],
});

export default Context;
