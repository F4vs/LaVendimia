import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <Navbar>
      <Nav>
        <NavDropdown eventKey={3} title="Inicio" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Ventas</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2}>Clientes</MenuItem>
          <MenuItem eventKey={3.3}>Articulos</MenuItem>
          <MenuItem eventKey={3.4}>Configuracion</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
