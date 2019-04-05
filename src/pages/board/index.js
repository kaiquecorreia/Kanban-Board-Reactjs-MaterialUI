import React, { Component } from 'react';
// Realiza a validação das propriedades
import PropTypes from 'prop-types';
// Permite manipular os estilos dos componentes Material UI
import { withStyles } from '@material-ui/core/styles';
// Realiza a conexao com o redux e a store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Componentes importados do material UI
import { Grid, Fab, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
// Action creators da store
import { Creators as BoardActions } from '../../store/ducks/board';
// Importa o componente que renderiza as colunas
import ColumnBoard from '../../components/ColumnBoard';

// Estilos aplicados nos componentes
const styles = () => ({
  root: {
    marginTop: '10px',
  },
  fab: {
    marginRight: '35px;',
    marginTop: '28px;',
  },
});

class Board extends Component {
  // Validação de props
  static propTypes = {
    board: PropTypes.shape({
      types: PropTypes.array.isRequired,
    }).isRequired,
    newTask: PropTypes.func.isRequired,
    classes: PropTypes.shape().isRequired,
  };

  // Responsável por capturar o textfield
  state = {
    taskInput: '',
  };

  // Realiza a inserção de uma nova tarefa
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
      <Grid className={classes.root} container justify="center" spacing={40}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Fab
              onClick={this.addNewTask}
              variant="extended"
              size="medium"
              color="primary"
              aria-label="Add"
              className={classes.fab}
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
