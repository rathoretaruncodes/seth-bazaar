//defining some utilities for next.js
import next from "next";

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

//handler: to self host nextjs
//simply forward all teh logic to nextjs using "nextHandler" 
export const nextHandler = nextApp.getRequestHandler()