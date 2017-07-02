import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ClientePage.css';
import { connect } from 'react-redux';
import { getClientes } from '../../LavendimiaReducer';
import { fetchClientes } from '../../LavendimiaActions';

class ClientePage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchClientes());
  }

  render() {
    return (
      <div>
        <h2>Registros de Clientes</h2>
        <br />
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Nombre
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Apellido Paterno
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Apellido Materno
            </Col>
            <Col sm={5}>
              <FormControl type="text" placeholder="" />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              RFC
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

function mapStateToProps(state) {
  return {
    clientes: getClientes(state),
  };
}

ClientePage.propTypes = {
  clientes: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ClientePage);
