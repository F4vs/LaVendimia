import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
function Ventas(props, context) {
  return (
    <Table striped bordered condensed hover>
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
          <td>Vendido</td>
        </tr>
      </tbody>
    </Table>
  );
}

Ventas.propTypes = {
};

export default Ventas;
