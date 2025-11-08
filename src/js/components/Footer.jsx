import React from "react";
function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      <nav>
        <a href="/acerca">Acerca de</a>
        <a href="/contacto">Contacto</a>
        <a href="/politica">Política de Privacidad</a>
      </nav>
    </footer>
  );
}

export default Footer;
