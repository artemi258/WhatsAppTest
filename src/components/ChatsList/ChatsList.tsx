import { memo, MouseEventHandler } from "react";
import "./chatsList.scss";

interface IChatsListProps {
  phone: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onGetMessages: (phone: string) => void;
}

const ChatsList = memo(function ChatsList({
  phone,
  onClick,
  onGetMessages,
}: IChatsListProps) {
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
});

export default ChatsList;
