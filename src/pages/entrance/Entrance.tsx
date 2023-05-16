import Container from "../../components/container/Container";

import "./entrance.scss";

function Entrance() {
  return (
    <section className="entrance">
      <Container>
        <form className="entrance__form">
          <div className="entrance__input">
            <label className="entrance__input-label" htmlFor="IdInstance">
              IdInstance
            </label>
            <input id="IdInstance" type="text" />
          </div>
          <div className="entrance__input">
            <label className="entrance__input-label" htmlFor="ApiTokenInstance">
              ApiTokenInstance
            </label>
            <input id="ApiTokenInstance" type="text" />
          </div>
          <button className="entrance__button">Войти</button>
        </form>
      </Container>
    </section>
  );
}

export default Entrance;
