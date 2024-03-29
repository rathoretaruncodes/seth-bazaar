//will get the payload/database client
import dotenv from 'dotenv'
import path from 'path'
import type { InitOptions } from 'payload/config';
import payload from 'payload';

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

//to get my client, use caching and save resources
let cached = (global as any).payload

if(!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}
//InitOptions is a type that payload cms provides
interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({initOptions}: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET) {
        //PAYLOAD_SECRET will enable to sign all the auth stuff, v. imp.
        throw new Error("PAYLOAD_SECRET is missing");
    }
    if(cached.client) {
        return cached.client;
    }
    if(!cached.promise) {
        //import payload from 'payload gives the init()
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client

}