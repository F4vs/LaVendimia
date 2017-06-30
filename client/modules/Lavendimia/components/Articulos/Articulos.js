import React, { PropTypes } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './Articulos.css';

function Articulos(props, context) {
  return (
    <div>
      <div className={styles.primaryButton}>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Nuevo Articulo</Button>
        </ButtonToolbar>
      </div>
      <Table condensed hover>
        <thead>
          <tr>
            <th>Clave Articulo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Comedor de roble para 6 perosonas</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

Articulos.propTypes = {
};

export default Articulos;
