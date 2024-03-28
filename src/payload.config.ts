import { buildConfig } from "payload/config";
import { postgresAdapter } from '@payloadcms/db-postgres';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from "path";

  export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [], //orders, products, userfiles
    routes: {
        admin: '/admin'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- SethBazaar",
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor : slateEditor({}),
    db: postgresAdapter({
        pool : {
            connectionString: process.env.POSTGRES_URL,
        }
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    }
})


