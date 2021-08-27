import { Request, Response, NextFunction } from "express";
import { userController } from '../controller/userController';


export class Routes {
    private user: userController = new userController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/user/:id').delete(this.user.GpDelete);
app.route('/user/get/search').get(this.user.GpSearch);
app.route('/user/get/update').put(this.user.GpSearchForUpdate);
app.route('/user').put(this.user.GpUpdate);
app.route('/user').get(this.user.GpGetAllValues);
app.route('/user').post(this.user.GpCreate);
     }

}