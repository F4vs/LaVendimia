import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button, Table, Grid, Row } from 'react-bootstrap';
import styles from './VentaPage.css';

class VentaPage extends Component {
  render() {
    return (
      <div>
        <h2>Registros de Ventas</h2>
        <p>Folio-</p>
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Cliente
            </Col>
            <Col sm={6}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
                  Articulo
            </Col>
            <Col sm={6}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <ButtonToolbar>
            <Button bsStyle="primary" type="submit">Agregar</Button>
          </ButtonToolbar>
        </Form>
        <br />
        <Table striped condensed hover>
          <thead>
            <tr>
              <th>Descripcion del Articulo</th>
              <th>Modelo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Comedor de roble para 6 perosonas</td>
              <td>2</td>
              <td>$5,000</td>
              <td>$6,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

}

VentaPage.propTypes = {
};

export default VentaPage;
