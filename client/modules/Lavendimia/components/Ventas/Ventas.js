import React, { PropTypes } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './Ventas.css';
function Ventas(props, context) {
  return (
    <div>
      <h2>Ventas Activas</h2>
      <br />
      <div className={styles.primaryButton}>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Nueva Venta</Button>
        </ButtonToolbar>
      </div>
      <Table condensed hover>
        <thead>
          <tr>
            <th>Folio de venta</th>
            <th>Clave Cliente</th>
            <th>Nombre</th>
            <th>Total</th>
            <th>Fecha</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>01</td>
            <td>Juan Perez</td>
            <td>1000</td>
            <td>30/06/2017</td>
            <td>Activa</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

Ventas.propTypes = {
};

export default Ventas;
