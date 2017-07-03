import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ArticuloPage.css';
import { connect } from 'react-redux';
import { getArticuloSuccess } from '../../LavendimiaReducer';
import { fetchArticulos, addArticuloRequest } from '../../LavendimiaActions';

class ArticuloPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchArticulos());
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.articuloSuccess) {
      window.location.href = '/articulos';
    }
  }

  addArticulo = () => {
    const articulo = {
      descripcion: this.state.descripcion,
      modelo: this.state.modelo,
      precio: this.state.precio,
      existencia: this.state.existencia,
    };
    this.props.dispatch(addArticuloRequest(articulo));
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  }

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
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('descripcion')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Modelo
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('modelo')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Precio
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('precio')}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Existencia
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder=""
                onChange={this.handleChange('existencia')}
              />
            </Col>
          </FormGroup>
          <ButtonToolbar className={styles.buttonsToolbar}>
            <Button bsStyle="success">Cancelar</Button>
            <Button bsStyle="success" onClick={this.addArticulo}>Guardar</Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articuloSuccess: getArticuloSuccess(state),
  };
}

ArticuloPage.propTypes = {
  articuloSuccess: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ArticuloPage);
