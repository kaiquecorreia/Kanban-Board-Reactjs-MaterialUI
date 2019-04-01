import React from 'react';
import {
  Card, CardContent, Typography, Button, CardActions,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const ColumnBoard = ({ typeColumns }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {typeColumns}
      </Typography>
      <Typography color="textSecondary">adjective</Typography>
      <Typography component="p">well meaning and kindly.</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

ColumnBoard.propTypes = {};

export default ColumnBoard;
