import "reflect-metadata";
import express from 'express';
import cors from "cors";
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "./container/container";



async function bootstrap () {


    const server = new InversifyExpressServer(container);
    const port = 4000;

    const corsOptions = {}
    
    server.setConfig((app) => {
        app.use(express.json());
        app.use(cors(corsOptions));
    });

    const app = server.build();

    const serverInstance = app.listen(port, async () => 
        {try 
            {console.log(`Server is running at ${port}`);}
         catch(e) {console.log(e);}});
}

export const start = async() => {
    await bootstrap();
    console.log("EXPRESS v1 STARTED");
}