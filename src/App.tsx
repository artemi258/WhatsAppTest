import { useState } from "react";
import Entrance from "./pages/entrance/Entrance";
import Messages from "./pages/entrance/messages/Messages";
import Context from "./context/Context";

const { Provider } = Context;

export interface IData {
  chats: string[];
  currentChat: string;
  idMessage: string;
  messages: any[];
  addChat: (phone: string) => void;
  startChat: (phone: string) => void;
  addIdChat: (id: string) => void;
  addMessages: (messages: any[] | string) => void;
}

const App = () => {
  const addChat = (phone: string) => {
    setData((state) => ({ ...state, chats: [...state.chats, phone] }));
  };
  const startChat = (phone: string) => {
    setData((state) => ({ ...state, currentChat: phone }));
  };
  const addIdChat = (id: string) => {
    setData((state) => ({ ...state, idMessage: id }));
  };
  const addMessages = (messagesOrMessage: any[] | string) => {
    if (Array.isArray(messagesOrMessage)) {
      setData((state) => ({ ...state, messages: messagesOrMessage }));
    } else {
      setData((state) => {
        console.log({
          ...state,
          messages: [...state.messages, messagesOrMessage],
        });
        return { ...state, messages: [messagesOrMessage, ...state.messages] };
      });
    }
  };
  const [data, setData] = useState<IData>({
    chats: [],
    currentChat: "",
    idMessage: "",
    messages: [],
    addChat,
    startChat,
    addIdChat,
    addMessages,
  });

  return (
    <Provider value={data}>
      <div className="App">
        {/* <Entrance /> */}
        <Messages />
      </div>
    </Provider>
  );
};

export default App;
