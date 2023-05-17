import HTTPTransport from "../requests/requests";
import Context from "../context/Context";
import { IData } from "../App";

interface IBody {
  chatId: string;
  message: string;
}

class MessagesController {
  request: HTTPTransport;
  addIdChat: (id: string) => void;
  addMessages: (messages: unknown[] | string) => void;
  userData: {
    IdInstance: string;
    ApiTokenInstance: string;
  };

  constructor(
    addIdChat: (id: string) => void,
    addMessages: (messages: unknown[] | string) => void,
    userData: {
      IdInstance: string;
      ApiTokenInstance: string;
    }
  ) {
    this.addIdChat = addIdChat;
    this.addMessages = addMessages;
    this.userData = userData;
    this.request = new HTTPTransport();
  }

  sendMessage = (url: string, chatId: string, message: string) => {
    const data = JSON.stringify({ chatId: `${chatId}@c.us`, message });
    this.request
      .post(url, data)
      .then((res) => {
        this.addIdChat(res.idMessage);
        this.addMessages(message);
        this.getNotificatione(
          `waInstance${this.userData.IdInstance}/ReceiveNotification/${this.userData.ApiTokenInstance}`
        );
      })
      .catch((err) => console.log(err));
  };
  getNotificatione = (url: string) => {
    this.request
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  getHistoryMessages = (url: string, body: Record<string, string | number>) => {
    const data = JSON.stringify(body);

    this.request
      .post(url, data)
      .then((res) => {
        return res.map((item: any) => item.textMessage);
      })
      .then((res) => this.addMessages(res));
  };
}

export default MessagesController;
