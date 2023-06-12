import "./styles.scss";
import Logo from "/assets/logo.svg";

const classRoot = 'header';

export default function Header() {
  
  return (
    <header className={classRoot}>
      <div className={`${classRoot}__logo`}>
        <a href="/"><img src={Logo} /></a>
      </div>
      <input id="header-toggle" className={`${classRoot}__toggle`} type="checkbox" />
      <label className={`${classRoot}__toggle-container`} htmlFor="header-toggle">
        <span className={`${classRoot}__hamburguer`}></span>
      </label>
      <nav className={`${classRoot}__nav`}>
        <a className={`${classRoot}__nav-item`} href="/institucional">
          <span>01</span>
          Institucional
        </a>
        <a className={`${classRoot}__nav-item`} href="/servicios">
          <span>02</span>
          Servicios
        </a>
        <a className={`${classRoot}__nav-item`} href="/contacto">
          <span>03</span>
          Contacto
        </a>
        <a className={`${classRoot}__nav-item ${classRoot}__nav-item--btn`} href="/registrar-empresa">
          Registrar empresa
        </a>
        <a className={`${classRoot}__nav-item ${classRoot}__nav-item--btn`} href="/ingresar">
          Ingresar
        </a>
      </nav>
    </header>
  )
}