import initNotificationRoutes from "./notificationRoutes";

const initRoutes = app => {
  app.use(`/api/notifications`, initNotificationRoutes());
  app.get(`/api/ping`, (req, res) => {
    res.send("Routes are working.");
  });
};

export default initRoutes;
