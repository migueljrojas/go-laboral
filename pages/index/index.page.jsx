import Main from "../../layouts/main";
import "./styles.scss";

function Page() {
  return (
    <Main className="home">
      <h1 className="home__title">Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive.
        </li>
      </ul>
    </Main>
  )
}

export {
  Page,
}