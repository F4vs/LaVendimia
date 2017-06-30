import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Lavendimia.css';

class Lavendimia extends Component {
  render() {
    return (
      <div className={styles}>
        <p>Cargando</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Lavendimia.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lavendimia);
