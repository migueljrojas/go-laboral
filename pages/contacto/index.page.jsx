import Main from "../../layouts/main";
import Hero from "./hero.section";
import Form from "./form.section";
import "./styles.scss";

function Page() {
  return (
    <Main className="contacto">
      <Hero />
      <Form />
    </Main>
  )
}

export {
  Page,
}