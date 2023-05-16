import "./message.scss";

interface IMessageProps {
  text: string;
}

function Message({ text }: IMessageProps) {
  return <li className="message message__your">{text}</li>;
}

export default Message;
