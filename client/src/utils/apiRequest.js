import axios from "axios";

const API_URL = `http://${process.env.REACT_APP_API_URL ||
  "localhost:3001"}/notifications/`;

const sendMessage = async data => {
  const auxOptions = {
    method: "POST",
    data
  };

  await axios(API_URL, auxOptions);
};

export default sendMessage;
