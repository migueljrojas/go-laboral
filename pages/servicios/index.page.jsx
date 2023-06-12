import Main from "../../layouts/main";
import Hero from "./hero.section";
import Medicina from "./medicina.section";
import Art from "./art.section";
import "./styles.scss";

function Page() {
  return (
    <Main className="servicios">
      <Hero />
      <Medicina />
      <Art />
    </Main>
  )
}

export {
  Page,
}