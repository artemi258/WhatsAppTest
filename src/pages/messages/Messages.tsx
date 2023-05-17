import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import ChatsList from "../../components/ChatsList/ChatsList";
import AddChat from "../../components/addChat/AddChat";
import Container from "../../components/container/Container";
import Message from "../../components/message/Message";

import "./messages.scss";
import Context from "../../context/Context";
import MessagesController from "../../controllers/MessagesController";

interface IMessage {
  whoseMessage: string;
  message: string;
}

function Messages() {
  const {
    chats,
    startChat,
    messages,
    currentChat,
    addIdChat,
    addMessages,
    userData,
  } = useContext(Context);
  const [value, setValue] = useState("");

  const req = new MessagesController(addIdChat, addMessages, userData);

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.outerText;
    startChat(value);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getMessages = useCallback(
    (phone: string) => {
      console.log("click");
      req.getHistoryMessages(
        `waInstance${userData.IdInstance}/getChatHistory/${userData.ApiTokenInstance}`,
        { chatId: `${phone}@c.us`, count: 100 }
      );
    },
    [currentChat]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    req.sendMessage(
      `waInstance${userData.IdInstance}/SendMessage/${userData.ApiTokenInstance}`,
      currentChat,
      value
    );
  };

  return (
    <section className="messages">
      <Container>
        <div className="messages__block">
          <div className="messages__block-chats">
            <AddChat />
            <ul className="messages__list">
              {chats.map((item, i) => (
                <ChatsList
                  onClick={onClick}
                  onGetMessages={getMessages}
                  key={i}
                  phone={item}
                />
              ))}
            </ul>
          </div>
          <div className="messages__block-message">
            <ul className="messages__main">
              {messages
                .slice()
                .reverse()
                .map((item, i) => (
                  <Message key={i} text={item} />
                ))}
            </ul>
            <div className="messages__sending">
              <form onSubmit={onSubmit} className="messages__form">
                <div className="messages__input">
                  <input value={value} onChange={onChange} type="text" />
                </div>
                <button className="messages__button">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Messages;
