//entry point for my express server

import express from 'express'
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-util';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    //start up cms/admin dashboard
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                //URL of admin dashboard
                cms.logger.info(`Admin URL ${cms.getAdminURL}`)
            },
        },
    })

    //made us completely independent of vercel
    //self hosting
    //each request in express is forwarded to  nextjs
    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        app.listen(PORT, async () => {
        })
    })
}