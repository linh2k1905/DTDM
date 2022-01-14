import express from "express";
import homeconstroller from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeconstroller.getHomePage);
    router.get('/about', homeconstroller.getAboutPage);


    router.get('/crud', homeconstroller.getCRUD);
    router.get('/display-crud', homeconstroller.displayCRUD);
    router.post('/post-crud', homeconstroller.postCRUD);
    router.get('/edit-crud', homeconstroller.geteditCRUD);
    router.post('/put-crud', homeconstroller.putCRUD);
    return app.use("/", router);
}
module.exports = initWebRoutes