import express from "express";
import homeconstroller from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeconstroller.getHomePage);
    router.get('/about', homeconstroller.getAboutPage);


    router.get('/thaolinh', (req, res) => {
        return res.send("hello world thao linh");

    })
    return app.use("/", router)
}
module.exports = initWebRoutes