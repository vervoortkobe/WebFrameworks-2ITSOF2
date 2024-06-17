//Before whe can use the throttle decorator, we must import it
//do not forget to run 'npm install' so that the dependencies are installed locally
import {throttle} from "lodash-decorators"

export class Logger { 
    constructor() {   
    }
    
    //Log the current date/time to the console window
    LogDate() {
        console.log(new Date())
    }

    //Log the current date/time to the console window, however this function will be executed at most once every 2000 milliseconds
    //due to the throttle decorator.
    //note: do not forget to add the setting "experimentalDecorators": true to the tsconfig.json file when using decorators
    @throttle(2000)
    logDateSlow()
    {
        console.log(new Date())
    }
}