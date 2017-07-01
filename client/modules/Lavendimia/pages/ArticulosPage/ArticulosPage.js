import React, { PropTypes, Component } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import styles from './ArticulosPage.css';
import { connect } from 'react-redux';
import { getArticulos } from '../../LavendimiaReducer';
import { fetchArticulos } from '../../LavendimiaActions';
import { Link } from 'react-router';

class ArticulosPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchArticulos());
  }

  render() {
    const { articulos } = this.props;
    const renglones = articulos.map(articulo => {
      return (
        <tr>
          <td>{articulo.clave}</td>
          <td>{articulo.descripcion}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Articulos Registrados</h2>
        <br />
        <ButtonToolbar className={styles.primaryButton}>
          <Button bsStyle="primary" bsSize="large" ><Link to="/venta" className={styles.linkformat}>Nuevo Articulo</Link></Button>
        </ButtonToolbar>
        <Table condensed hover>
          <thead>
            <tr>
              <th>Clave Articulo</th>
              <th>Descripción</th>
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
    articulos: getArticulos(state),
  };
}

ArticulosPage.propTypes = {
  articulos: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ArticulosPage);
