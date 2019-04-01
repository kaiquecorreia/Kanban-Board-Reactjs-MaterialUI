import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import {
  CardContent,
  Typography,
  IconButton,
  Button,
  CardActions,
  Divider,
} from '@material-ui/core';
import { ArrowBack, ArrowForward, Delete } from '@material-ui/icons';
import { Creators as BoardActions } from '../../store/ducks/board';

const styles = () => ({});

class Task extends Component {
  componentDidMount() {
    console.log('');
  }

  forwardTask = (task) => {
    const { tasks, types } = this.props.board;
    const { forwardTaskType } = this.props;
    let type = types.findIndex(type => type === task.type);
    if (type !== 4) {
      type += 1;
      const data = [
        ...tasks.filter(obj => obj.id !== task.id),
        { id: task.id, type: types[type], description: task.description },
      ];

      forwardTaskType(data);
    }
  };

  backTask = (task) => {
    const { tasks, types } = this.props.board;
    const { backTaskType } = this.props;
    let type = types.findIndex(type => type === task.type);
    if (type !== 0) {
      type -= 1;
      const data = [
        ...tasks.filter(obj => obj.id !== task.id),
        { id: task.id, type: types[type], description: task.description },
      ];

      backTaskType(data);
    }
  };

  deleteTask = (task) => {
    const { tasks, types } = this.props.board;
    const { removeTask } = this.props;
    const data = [...tasks.filter(obj => obj.id !== task.id)];
    removeTask(data);
  };

  render() {
    const { description, task, deleteTask } = this.props;

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
)(withStyles(styles)(Task));
