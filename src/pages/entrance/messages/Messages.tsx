import { ChangeEvent, FormEvent, useContext, useState } from "react";
import ChatsList from "../../../components/ChatsList/ChatsList";
import AddChat from "../../../components/addChat/AddChat";
import Container from "../../../components/container/Container";
import Message from "../../../components/message/Message";

import "./messages.scss";
import Context from "../../../context/Context";
import MessagesController from "../../../controllers/MessagesController";

interface IMessage {
  whoseMessage: string;
  message: string;
}

function Messages() {
  const { chats, startChat, messages, currentChat, addIdChat, addMessages } =
    useContext(Context);
  const [value, setValue] = useState("");

  const req = new MessagesController(addIdChat, addMessages);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.outerText;
    startChat(value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getMessages = (phone: string) => {
    console.log("click");
    req.getHistoryMessages(
      "waInstance1101820512/getChatHistory/fe98b299532248fb8eba5e734a74eeb9bc1e0e9a84374b3091",
      { chatId: `${phone}@c.us`, count: 100 }
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    req.sendMessage(
      "waInstance1101820512/SendMessage/fe98b299532248fb8eba5e734a74eeb9bc1e0e9a84374b3091",
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
