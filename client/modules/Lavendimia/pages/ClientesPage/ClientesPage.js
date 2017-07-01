import React, { PropTypes, Component } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ClientesPage.css';
import { connect } from 'react-redux';
import { getClientes } from '../../LavendimiaReducer';
import { fetchClientes } from '../../LavendimiaActions';
import { Link } from 'react-router';

class ClientesPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchClientes());
  }

  render() {
    const { clientes } = this.props;
    const renglones = clientes.map(cliente => {
      return (
        <tr>
          <td>{cliente.clave}</td>
          <td>{cliente.nombre}</td>
          <td><Button bsStyle="info" bsSize="xsmall" href="#">Editar</Button></td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Clientes Registrados</h2>
        <br />
        <div className={styles.primaryButton}>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large"><Link to="/cliente" className={styles.linkformat}>Nuevo Cliente</Link></Button>
          </ButtonToolbar>
        </div>
        <Table condensed hover>
          <thead>
            <tr>
              <th>Clave Cliente</th>
              <th>Nombre</th>
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
  };
}

ClientesPage.propTypes = {
  clientes: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ClientesPage);
