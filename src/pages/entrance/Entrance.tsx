import { ChangeEvent, FormEvent, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import Context from "../../context/Context";

import "./entrance.scss";

function Entrance() {
  const [IdInstance, setIdInstance] = useState("");
  const [ApiTokenInstance, setApiTokenInstance] = useState("");
  const navigate = useNavigate();

  const { addUserData } = useContext(Context);

  const onChangeIdInstance = (e: ChangeEvent<HTMLInputElement>) => {
    setIdInstance(e.currentTarget.value);
  };
  const onChangeApiTokenInstance = (e: ChangeEvent<HTMLInputElement>) => {
    setApiTokenInstance(e.currentTarget.value);
  };

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    addUserData(IdInstance, ApiTokenInstance);
    navigate("/chat");
  };

  return (
    <section className="entrance">
      <Container>
        <form onSubmit={onsubmit} className="entrance__form">
          <div className="entrance__input">
            <label className="entrance__input-label" htmlFor="IdInstance">
              IdInstance
            </label>
            <input
              onChange={onChangeIdInstance}
              value={IdInstance}
              id="IdInstance"
              type="text"
            />
          </div>
          <div className="entrance__input">
            <label className="entrance__input-label" htmlFor="ApiTokenInstance">
              ApiTokenInstance
            </label>
            <input
              onChange={onChangeApiTokenInstance}
              value={ApiTokenInstance}
              id="ApiTokenInstance"
              type="text"
            />
          </div>
          <button className="entrance__button">Войти</button>
        </form>
      </Container>
    </section>
  );
}

export default Entrance;
