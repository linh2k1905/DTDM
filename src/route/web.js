import express from "express";
import homeconstroller from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeconstroller.getHomePage);
    router.get('/about', homeconstroller.getAboutPage);


    router.get('/crud', homeconstroller.getCRUD);
    router.get('/display-crud', homeconstroller.displayCRUD);
    router.post('/post-crud', homeconstroller.postCRUD);
    router.get('/edit-crud', homeconstroller.geteditCRUD);
    router.get('/delete-crud', homeconstroller.getdeleteCRUD);
    router.post('/put-crud', homeconstroller.putCRUD);
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers)
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    return app.use("/", router);

}
module.exports = initWebRoutes