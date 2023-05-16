import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Context from "../../context/Context";

function AddChat() {
  const { addChat } = useContext(Context);

  const [value, setValue] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addChat(value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="addChat">
      <div className="addChat__input">
        <input value={value} name="phone" onChange={onChange} type="text" />
      </div>
      <button className="addChat__button">Добавить</button>
    </form>
  );
}

export default AddChat;
