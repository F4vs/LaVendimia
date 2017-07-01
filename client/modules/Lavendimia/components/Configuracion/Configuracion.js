import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './Configuracion.css';

function Configuracion(props, context) {
  return (
    <div>
      <h2>Configuracion General</h2>
      <br />
      <Form horizontal>
        <FormGroup controlId="">
          <Col componentClass={ControlLabel} sm={3}>
            Tasa Financiamiento
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="">
          <Col componentClass={ControlLabel} sm={3}>
            % Enganche
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="">
          <Col componentClass={ControlLabel} sm={3}>
            Plaza Maximo
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <ButtonToolbar className={styles.buttonsToolbar}>
          <Button bsStyle="success">Cancelar</Button>
          <Button bsStyle="success" type="submit">Guardar</Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

Configuracion.propTypes = {
};

export default Configuracion;
