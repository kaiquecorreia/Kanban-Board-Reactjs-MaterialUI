import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Grid, Button, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Creators as BoardActions } from '../../store/ducks/board';
import ColumnBoard from '../../components/ColumnBoard';

const styles = () => ({
  root: {
    marginTop: '10px',
  },
});

class Board extends Component {
  static propTypes = {
    board: PropTypes.shape({
      types: PropTypes.arrayOf().isRequired,
    }).isRequired,
    classes: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {
      board: { types },
      classes,
    } = this.props;

    return (
      <Grid className={classes.root} container spacing={40}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Fab variant="extended" size="medium" color="primary" aria-label="Add">
              <Add />
              Adicionar Tarefa
            </Fab>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <ColumnBoard typeColumns={types[0]} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
});

const mapDispatchToProps = dispatch => bindActionCreators(BoardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Board));
