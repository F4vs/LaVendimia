import React, { PropTypes, Component } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './VentasPage.css';
import { connect } from 'react-redux';
import { getVentas } from '../../LavendimiaReducer';
import { fetchVentas } from '../../LavendimiaActions';

class VentasPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchVentas());
  }

  render() {
    const { ventas } = this.props;
    const renglones = ventas.map(venta => {
      return (
        <tr>
          <td>{venta.clave}</td>
          <td>{venta.clavecliente}</td>
          <td>{venta.nombre}</td>
          <td>{venta.total}</td>
          <td>{venta.fecha}</td>
          <td>{venta.status}</td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Ventas Activas</h2>
        <br />
        <div className={styles.primaryButton}>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" href="/venta">Nueva Venta</Button>
          </ButtonToolbar>
        </div>
        <Table condensed hover>
          <thead>
            <tr>
              <th>Folio de venta</th>
              <th>Clave Cliente</th>
              <th>Nombre</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Estatus</th>
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
    ventas: getVentas(state),
  };
}

VentasPage.propTypes = {
  ventas: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(VentasPage);
