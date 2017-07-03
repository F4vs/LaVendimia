import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ClientePage.css';
import { connect } from 'react-redux';
import { getClienteSuccess } from '../../LavendimiaReducer';
import { fetchClientes, addClienteRequest } from '../../LavendimiaActions';

class ClientePage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchClientes());
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (nextProps.clienteSuccess) {
      window.location.href = '/clientes';
    }
  }

  addCliente = () => {
    const cliente = {
      nombre: this.state.nombre,
      primerapellido: this.state.primerapellido,
      segundoapellido: this.state.segundoapellido,
      rfc: this.state.rfc,
    };
    this.props.dispatch(addClienteRequest(cliente));
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
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
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('nombre')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Apellido Paterno
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('primerapellido')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Apellido Materno
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('segundoapellido')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              RFC
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('rfc')}
              />
            </Col>
          </FormGroup>
          <ButtonToolbar className={styles.buttonsToolbar}>
            <Button bsStyle="success">Cancelar</Button>
            <Button bsStyle="success" onClick={this.addCliente}>Guardar</Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clienteSuccess: getClienteSuccess(state),
  };
}

ClientePage.propTypes = {
  clienteSuccess: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ClientePage);
