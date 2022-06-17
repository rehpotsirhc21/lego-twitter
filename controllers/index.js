const router = require("express").Router();

const apiroutes = require("./api");
const homeRoutes = require("./home");
const dashBoardRoutes = require('./dashboard-routes.js')

router.use("/api", apiroutes);
router.use("/", homeRoutes);
router.use('/dashboard', dashBoardRoutes)

module.exports = router;
