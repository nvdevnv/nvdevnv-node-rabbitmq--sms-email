import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SmsService from "./smsService";
import EmailServices from "./emailService";
import apiRequest from "../utils/apiRequest";
import ErrorAlert from "./errorAlert";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const services = [
  {
    name: "SMS",
    handler: SmsService
  },
  {
    name: "EMAIL",
    handler: EmailServices
  }
];

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [validationError, setValidationError] = useState();
  const ComponentToRender = services[value].handler;

  useEffect(() => setValidationError(), [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSendMessage = messageData => {
    apiRequest(messageData);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="SMS" />
        <Tab label="EMAIL" />
      </Tabs>
      <ComponentToRender
        send={handleSendMessage}
        setValidationError={setValidationError}
        validationError={validationError}
      />
      {validationError && <ErrorAlert errorMessage={validationError} />}
    </Paper>
  );
}
