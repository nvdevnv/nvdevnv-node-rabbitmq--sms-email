import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  root: {
    width: "20%",
    margin: "auto",
    marginTop: "50px",
    "& > * + *": {
      margin: "auto"
    }
  }
}));

export default function DescriptionAlerts(props) {
  const classes = useStyles();
  const { message, alertType } = props;
  const title = alertType === "error" ? `Error` : "Success";
  return (
    <div className={classes.root}>
      <Alert severity={alertType}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}
