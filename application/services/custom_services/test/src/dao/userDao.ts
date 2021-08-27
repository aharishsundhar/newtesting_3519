
import { CustomLogger } from '../config/Logger'


export class userDao {
    
    constructor() { }
    getCredentialsData(connectorName) {
        return new Promise(resolve => {
            new ApiAdaptar().get('http://localhost:8000/desktop/scmbyname?connector_name=' + connectorName).then(
                data => {
                    resolve(data);
                }
            )
        })
    }
    public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: ');

    

    
    
    
    }


}