import React from 'react';
//import { connect } from 'react-redux';

import Task from './Task';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  task: {
    textAlign: 'center',
  },
  box: {
    marginRight: 'auto',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  console.log(props);
  if (props.id === 'inProgress') {
    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Card w Tasks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense className={classes.root}>
              {/* map tasks here */}
              <ListItem>
                <Task className={classes.box} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  // } else if (props.id === 'stack') {
  //   <div className={classes.root}>
  //     <Paper className={classes.paper}>{props.name}</Paper>
  //   </div>;
  else {
    const todoArray = [];
    if (props.card) {
      let todo = props.card.todo;
      console.log('in cards', props.card.todo);

      for (let i = 0; i < todo.length; i += 1) {
        todoArray.push(
          <div>
            <li>{todo[i].taskName}</li>
            <li>{todo[i].details} </li>

            <li>{todo[i].completed}</li>
          </div>
        );
      }
    }

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {props.name}
          {props.url}
          {todoArray}
        </Paper>
      </div>
    );
  }
};

export default Card;
