import packageJSON from "../package.json";

module.exports = {
  app: {
    version: packageJSON.version,
    title: "Simple SMS/email service",
    description: packageJSON.description
  },

  twilio: {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    accountSID: process.env.TWILIO_SID,
    fromNumber: process.env.TWILIO_PHONE_NUMBER
  },

  sendgrid: {
    apiKey:
      process.env.SENDGRID_API_KEY
  },

  rabbitmq: {
    // default port is 5672. If that is not used, then specify in the url
    url: process.env.AMQP_URL || "amqp://localhost",
    queue: "notify"
  },

  port: 3001
};
