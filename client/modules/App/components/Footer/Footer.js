import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>Desarrollado por: Felipe Antonio Valenzuela Silva</p>
      <p>Correo: felipe.valenzuela.sv@gmail.com</p>
    </div>
  );
}

export default Footer;
