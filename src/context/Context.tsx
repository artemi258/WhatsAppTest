import { createContext } from "react";
import { IData } from "../App";

const Context = createContext<IData>({
  chats: [],
  currentChat: "",
  idMessage: "",
  messages: [],
  userData: {
    IdInstance: "",
    ApiTokenInstance: "",
  },
  addChat: () => {},
  startChat: () => {},
  addIdChat: () => {},
  addMessages: () => [],
  addUserData: () => {},
});

export default Context;
