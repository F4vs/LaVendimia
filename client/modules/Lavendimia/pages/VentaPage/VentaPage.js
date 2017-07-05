import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, Form, Col, ButtonToolbar, Button, Table } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import { getClientes, getArticulos } from '../../LavendimiaReducer';
import { connect } from 'react-redux';
import { fetchClientes, fetchArticulos } from '../../LavendimiaActions';
import style from './VentaPage.css';

const getSuggestionValue = suggestion => suggestion.nombre + ' ' + suggestion.primerapellido + ' ' + suggestion.segundoapellido + ' - ' + suggestion.rfc;
const getSuggestionValueArticulo = suggestion => suggestion.descripcion;

const renderSuggestion = cliente => (
  <div>
    {cliente.nombre} {cliente.primerapellido} {cliente.segundoapellido}
  </div>
);

const renderSuggestionArticulo = articulo => (
  <div>
    {articulo.descripcion}
  </div>
);

class VentaPage extends Component {
  constructor() {
    super();
    this.state = {
      clienteValue: '',
      articuloValue: '',
      clientes: [],
      articulos: [],
      articuloVenta: [],
      selectedArticulo: null,
      selectedCliente: null,
    }; }

  componentDidMount() {
    this.props.dispatch(fetchClientes());
    this.props.dispatch(fetchArticulos());
  }

  onChangeCliente = (event, { newValue }) => {
    this.setState({
      clienteValue: newValue,
    });
  };

  onChangeArticulo = (event, { newValue }) => {
    this.setState({
      articuloValue: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      clientes: this.getSuggestions(value),
    });
  };

  onSuggestionsFetchRequestedArticulo = ({ value }) => {
    this.setState({
      articulos: this.getSuggestionsArticulo(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      clientes: [],
    });
  };

  onSuggestionsClearRequestedArticulo = () => {
    this.setState({
      articulos: [],
    });
  };

  getSuggestions = (clienteValue) => {
    const data = this.props.clientes;
    const inputValue = clienteValue.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : data.filter(cliente =>
      cliente.nombre.toLowerCase().slice(0, inputLength) === inputValue ||
      cliente.primerapellido.toLowerCase().slice(0, inputLength) === inputValue ||
      cliente.segundoapellido.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionsArticulo = (articuloValue) => {
    const data = this.props.articulos;
    const inputValue = articuloValue.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : data.filter(articulo =>
      articulo.descripcion.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  addVenta = () => {
    console.log(this.state);
    const { selectedArticulo, articuloVenta } = this.state;
    articuloVenta.push(selectedArticulo);
    this.setState({
      articuloVenta,
      selectedArticulo: null,
    });
  }

  selectedCliente = (event, { suggestion }) => {
    this.setState({
      selectedCliente: suggestion
    });
  }

  selectedArticulo = (event, { suggestion }) => {
    this.setState({
      selectedArticulo: suggestion
    });
  }


  render() {
    const { clienteValue, clientes, articuloValue, articulos, articuloVenta } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Nombre del cliente',
      value: clienteValue,
      onChange: this.onChangeCliente,
    };

    const inputArticuloProps = {
      placeholder: 'Descripcion del articulo',
      value: articuloValue,
      onChange: this.onChangeArticulo,
    };

    const renglones = articuloVenta.map(articulo => {
      return (
        <tr>
          <td>{articulo.descripcion}</td>
          <td>{articulo.modelo}</td>
          <td>{articulo.cantidad}</td>
          <td>{articulo.precio}</td>
          <td>{articulo.importe}</td>
          <td><Button bsStyle="danger" bsSize="xsmall" href="#">Borrar</Button></td>
        </tr>
      );
    });
    return (
      <div>
        <h2>Registros de Ventas</h2>
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Cliente
            </Col>
            <Col sm={6}>
              <Autosuggest
                className={style.autoSuggest}
                suggestions={clientes}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={this.selectedCliente}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={3}>
              Articulo
            </Col>
            <Col sm={6}>
              <Autosuggest
                suggestions={articulos}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequestedArticulo}
                onSuggestionsClearRequested={this.onSuggestionsClearRequestedArticulo}
                getSuggestionValue={getSuggestionValueArticulo}
                renderSuggestion={renderSuggestionArticulo}
                inputProps={inputArticuloProps}
                onSuggestionSelected={this.selectedArticulo}
              />
            </Col>
          </FormGroup>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.addVenta} >Agregar</Button>
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
           {renglones}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clientes: getClientes(state),
    articulos: getArticulos(state),
  };
}

VentaPage.propTypes = {
  clientes: PropTypes.array,
  articulos: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(VentaPage);
