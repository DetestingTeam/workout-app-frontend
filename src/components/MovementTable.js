import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function SimpleTable(props) {
  const { classes } = props;
    let data = [{name: "", rec_set: "", re_rep: "", rec_duration: ""}]

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Movement Name</TableCell>
            <TableCell numeric>Sets</TableCell>
            <TableCell numeric>Reps</TableCell>
            <TableCell >Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n,index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.rec_set}</TableCell>
                <TableCell numeric>{n.rec_rep}</TableCell>
                <TableCell numeric>{n.rec_duration}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
