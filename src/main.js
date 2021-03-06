'use strict';
const path = require('path');
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import db from './db';
import appRouter from './routes';

import errorHandler from './middlewares/errorHandler';

const { sequelize } = db;

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());
app.use(cors());
app.use(appRouter.routes());

sequelize.sync().then(async () => {
    app.listen(PORT, () => {
        console.log(`server listen on port ${PORT}`);
    });
});
