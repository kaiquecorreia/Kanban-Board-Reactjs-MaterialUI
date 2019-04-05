import React, { Fragment } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import Task from '../Task';

import { Creators as BoardActions } from '../../store/ducks/board';

const styles = () => ({});

const ColumnBoard = ({ typeColumns, board }) => {
  const taskType = board.tasks.filter(obj => obj.type === typeColumns);

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {typeColumns}
          </Typography>
        </CardContent>
        {taskType.map(task => (
          <Task key={task.id} description={task.description} task={task} />
        ))}
      </Card>
    </Fragment>
  );
};

ColumnBoard.propTypes = {
  typeColumns: PropTypes.string.isRequired,
  board: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  board: state.board,
});

const mapDispatchToProps = dispatch => bindActionCreators(BoardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ColumnBoard));
