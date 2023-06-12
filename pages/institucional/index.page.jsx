import Main from "../../layouts/main";
import Hero from "./hero.section";
import About from "./about.section";
import "./styles.scss";

function Page() {
  return (
    <Main className="institucional">
      <Hero />
      <About />
    </Main>
  )
}

export {
  Page,
}