import "./styles.scss";

const classRoot = 'header';

export default function Header() {
  
  return (
    <header className={classRoot}>
      <div className={`${classRoot}__logo`}>
        <a href="/">Logo</a>
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
        <a className={`${classRoot}__nav-item ${classRoot}__nav-item--btn`} href="/contacto">
          Registrar empresa
        </a>
        <a className={`${classRoot}__nav-item ${classRoot}__nav-item--btn`} href="/contacto">
          Ingresar
        </a>
      </nav>
    </header>
  )
}