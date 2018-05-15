const router = require("express").Router();
const incidentsRoutes = require("./incidents");
const usersRoutes = require("./users");

// App routes
router.use("/incidents", incidentsRoutes);
router.use("/users", usersRoutes);

module.exports = router;