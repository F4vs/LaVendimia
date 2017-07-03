import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Col, ButtonToolbar, Button, Table } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import { getClientes } from '../../LavendimiaReducer';
import { connect } from 'react-redux';
import { fetchClientes } from '../../LavendimiaActions';

const getSuggestionValue = suggestion => suggestion.nombre + ' ' + suggestion.primerapellido + ' ' + suggestion.segundoapellido;

const renderSuggestion = cliente => (
  <div>
    {cliente.nombre} {cliente.primerapellido} {cliente.segundoapellido}
  </div>
);

class VentaPage extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    }; }

  componentDidMount() {
    this.props.dispatch(fetchClientes());
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions = (value) => {
    const data = this.props.clientes;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : data.filter(cliente =>
      cliente.nombre.toLowerCase().slice(0, inputLength) === inputValue ||
      cliente.primerapellido.toLowerCase().slice(0, inputLength) === inputValue ||
      cliente.segundoapellido.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Nombre del cliente',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <h2>Registros de Ventas</h2>
        <p>Folio-</p>
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Cliente
            </Col>
            <Col sm={4}>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
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

function mapStateToProps(state) {
  return {
    clientes: getClientes(state),
  };
}

VentaPage.propTypes = {
  clientes: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(VentaPage);
