import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './Configuracion.css';

function Configuracion(props, context) {
  return (
    <div>
      <h2>Configuracion General</h2>
      <Form horizontal>
        <FormGroup controlId="formConfiguracion">
          <Col componentClass={ControlLabel} sm={3}>
            Tasa Financiamiento
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formConfiguracion">
          <Col componentClass={ControlLabel} sm={3}>
            % Enganche
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formConfiguracion">
          <Col componentClass={ControlLabel} sm={3}>
            Plaza Maximo
          </Col>
          <Col sm={2}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
      </Form>
      <div className={styles.buttonsToolbar}>
        <ButtonToolbar>
          <Button bsStyle="success">Cancelar</Button>
          <Button bsStyle="success">Guardar</Button>
        </ButtonToolbar>
      </div>
    </div>
  );
}

Configuracion.propTypes = {
};

export default Configuracion;
