import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine"
import initWebRoutes from './route/web';
import connectDB from './config/connectdb';

require('dotenv').config();

let app = express();

//app.use(bodyParser.json);
//app.use(bodyParser.urlencoded({ extended: true }));
const urlencode = express.urlencoded({ extended: false })
app.use(urlencode)
app.use(express.json())
configViewEngine(app);
initWebRoutes(app);

connectDB();
let port = process.env.PORT || 8888
app.listen(port, () => {
    console.log("Chay backend thanh cong tren cong : " + port);
})