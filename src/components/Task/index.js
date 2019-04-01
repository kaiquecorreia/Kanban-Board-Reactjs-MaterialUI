import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  CardContent, Typography, IconButton, CardActions, Divider,
} from '@material-ui/core';
import { ArrowBack, ArrowForward, Delete } from '@material-ui/icons';
import PropTypes, { shape } from 'prop-types';
import { Creators as BoardActions } from '../../store/ducks/board';

class Task extends Component {
  static propTypes = {
    board: PropTypes.shape().isRequired,
    forwardTaskType: PropTypes.func.isRequired,
    backTaskType: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    task: PropTypes.arrayOf(
      shape({
        id: PropTypes.number,
        type: PropTypes.string,
        description: PropTypes.string,
      }),
    ).isRequired,
  };

  // Permite avançar o item da tarefa para outro estado
  forwardTask = (task) => {
    const {
      board: { tasks, types },
    } = this.props;
    const { forwardTaskType } = this.props;
    let type = types.findIndex(typeFound => typeFound === task.type);
    if (type !== 4) {
      type += 1;
      const data = [
        ...tasks.filter(obj => obj.id !== task.id),
        { id: task.id, type: types[type], description: task.description },
      ];

      forwardTaskType(data);
    }
  };

  // Permite voltar o item da tarefa para outro estado
  backTask = (task) => {
    const {
      board: { tasks, types },
    } = this.props;
    const { backTaskType } = this.props;
    let type = types.findIndex(typeFound => typeFound === task.type);
    if (type !== 0) {
      type -= 1;
      const data = [
        ...tasks.filter(obj => obj.id !== task.id),
        { id: task.id, type: types[type], description: task.description },
      ];

      backTaskType(data);
    }
  };

  // Deleta uma tarefa
  deleteTask = (task) => {
    const {
      board: { tasks },
    } = this.props;
    const { removeTask } = this.props;
    const data = [...tasks.filter(obj => obj.id !== task.id)];
    removeTask(data);
  };

  render() {
    const { description, task } = this.props;

    return (
      <Fragment>
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => this.backTask(task)}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={() => this.deleteTask(task)}>
            <Delete />
          </IconButton>
          <IconButton onClick={() => this.forwardTask(task)}>
            <ArrowForward />
          </IconButton>
        </CardActions>
        <Divider />
      </Fragment>
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
)(Task);
