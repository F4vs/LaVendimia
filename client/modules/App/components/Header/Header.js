import React, { PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <Navbar>
      <div className={`pull-right ${styles.fecha}`}>
        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
      <Nav>
        <NavDropdown eventKey={3} title="Inicio" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/ventas">Ventas</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2} href="/clientes">Clientes</MenuItem>
          <MenuItem eventKey={3.3} href="/articulos">Articulos</MenuItem>
          <MenuItem eventKey={3.4} href="/configuracion">Configuracion</MenuItem>
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
