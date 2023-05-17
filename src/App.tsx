import { useCallback, useState } from "react";
import Entrance from "./pages/entrance/Entrance";
import Messages from "./pages/messages/Messages";
import Context from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const { Provider } = Context;

export interface IData {
  chats: string[];
  currentChat: string;
  idMessage: string;
  messages: any[];
  userData: {
    IdInstance: string;
    ApiTokenInstance: string;
  };
  addChat: (phone: string) => void;
  startChat: (phone: string) => void;
  addIdChat: (id: string) => void;
  addMessages: (messages: any[] | string) => void;
  addUserData: (IdInstance: string, ApiTokenInstance: string) => void;
}

const App = () => {
  const addChat = (phone: string) => {
    setData((state) => ({ ...state, chats: [...state.chats, phone] }));
  };
  const startChat = useCallback((phone: string) => {
    setData((state) => ({ ...state, currentChat: phone }));
  }, []);

  const addIdChat = (id: string) => {
    setData((state) => ({ ...state, idMessage: id }));
  };

  const addUserData = (IdInstance: string, ApiTokenInstance: string) => {
    setData((state) => ({
      ...state,
      userData: {
        IdInstance,
        ApiTokenInstance,
      },
    }));
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
    userData: {
      IdInstance: "",
      ApiTokenInstance: "",
    },
    addChat,
    startChat,
    addIdChat,
    addMessages,
    addUserData,
  });

  return (
    <Provider value={data}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entrance />} />
            <Route path="/chat" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
