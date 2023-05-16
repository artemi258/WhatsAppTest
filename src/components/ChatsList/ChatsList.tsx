import { MouseEventHandler } from "react";
import "./chatsList.scss";

interface IChatsListProps {
  phone: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onGetMessages: (phone: string) => void;
}

function ChatsList({ phone, onClick, onGetMessages }: IChatsListProps) {
  return (
    <li
      onClick={(e) => {
        onClick(e);
        onGetMessages(phone);
      }}
      className="chatsList"
    >
      {phone}
    </li>
  );
}

export default ChatsList;
