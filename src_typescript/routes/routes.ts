import express,  { Router, Request, Response} from "express";
import path from "path";

const routes = Router();

routes.use("/impressum", express.static("static/html/impressum.html"));
routes.use("/verify", express.static("static/html/verify.html"));
routes.use("/reset_password", express.static("static/html/recovery.html"));
routes.use("/delete_account", express.static("static/html/delete_account.html"));

routes.use('/css', express.static('static/css'));
routes.use('/fonts', express.static('static/fonts'));
routes.use('/js', express.static('static/js'));
routes.use('/img', express.static('static/images'));

routes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../../static/html/home.html'));
});

routes.get("/files/app/Xitem.apk", function(req, res) {
    res.sendFile(path.join(__dirname + '/../../static/app/Xitem 1.1.15.apk'));
});

routes.use("*", function(request: Request, response: Response) {
    response.status(404).sendFile(path.join(__dirname + '/../../static/html/404.html'));
});

export default routes;