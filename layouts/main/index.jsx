import { string } from "prop-types";
import { childrenPropType } from "/renderer/PropTypeValues";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Main({children, className}) {
  return (
    <>
      <Header />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Main.propTypes = {
  children: childrenPropType,
  className: string
}

export default Main;