import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: "50%",
        marginLeft: "350px",
        marginBottom: "30px",
        backgroundColor: "#536162",
        fontFamily: "poppins"
  },
    img: {
      marginLeft: "100px"
    },
    title: {
        fontSize: "8",
        fontFamily: "poppins"
    },
    font: {
        fontSize: "5",
        fontFamily: "poppins"
    }
});

export default function Info(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
        >
          {props.headline}
        </Typography>
        <Typography className={classes.font}>
          Published: {props.pub}
              </Typography>
              <hr />
        <img className={classes.img} width="500" height="300" src={props.img} alt="news">
        </img>
      </CardContent>
      <CardActions className={classes.font}>
        <Button size="small" ><a className="link" href={props.link}>FULL ARTICLE</a></Button>
      </CardActions>
    </Card>
  );
}
