import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: 300,
    marginRight: "30px",
    backgroundColor: "grey",
    color: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "poppins"
    },
    icon: {
        position: "relative",
        top: "5px"
    }
});

export default function CardStyle(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>{props.text}</Typography>
        <Typography> <PersonIcon className={classes.icon} /> &nbsp;&nbsp; {props.data}</Typography>
      </CardContent>
    </Card>
  );
}
