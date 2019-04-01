import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Fab, TextField } from '@material-ui/core';
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
      types: PropTypes.array.isRequired,
    }).isRequired,
    newTask: PropTypes.func.isRequired,
    classes: PropTypes.shape().isRequired,
  };

  state = {
    taskInput: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  addNewTask = () => {
    const { taskInput } = this.state;
    const { newTask } = this.props;
    newTask(taskInput);
    this.setState({ taskInput: '' });
  };

  render() {
    const {
      board: { types },
      classes,
    } = this.props;
    const { taskInput } = this.state;
    return (
      <Grid className={classes.root} container spacing={40}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Fab
              onClick={this.addNewTask}
              variant="extended"
              size="medium"
              color="primary"
              aria-label="Add"
            >
              <Add />
              Adicionar Tarefa
            </Fab>
            <TextField
              id="task"
              label="Insira uma nova tarefa"
              value={taskInput}
              onChange={e => this.setState({ taskInput: e.target.value })}
              margin="normal"
            />
          </Grid>
        </Grid>

        {types.map(type => (
          <Grid key={type} item xs={2}>
            <ColumnBoard typeColumns={type} />
          </Grid>
        ))}
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
