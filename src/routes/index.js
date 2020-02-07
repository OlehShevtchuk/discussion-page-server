import Router from 'koa-router';

// ROUTES
import comments from './comments';

const appRouter = new Router();

const routes = {
    '/comments': comments,
};

Object.keys(routes).forEach(key => {
    const router = routes[key];
    appRouter.use(key, router.routes(), router.allowedMethods());
});

export default appRouter;
