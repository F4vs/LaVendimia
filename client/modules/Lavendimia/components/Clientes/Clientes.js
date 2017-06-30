import React, { PropTypes } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './Clientes.css';

function Clientes(props, context) {
  return (
    <div>
      <div className={styles.primaryButton}>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Nuevo Cliente</Button>
        </ButtonToolbar>
      </div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Clave Cliente</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Juan Perez</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

Clientes.propTypes = {
};

export default Clientes;
