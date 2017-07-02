import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ArticuloPage.css';

class ArticuloPage extends Component {
  render() {
    return (
      <div>
        <h2>Registros de Articulos</h2>
        <br />
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Descripcion
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Modelo
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Precio
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Existencia
            </Col>
            <Col sm={5}>
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
}

ArticuloPage.propTypes = {
};

export default ArticuloPage;
