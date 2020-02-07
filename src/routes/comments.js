import Router from 'koa-router';
import models from '../db';

const router = new Router();

router.get('/', async ctx => {
    // const comment = await models.Comment.create({ author: "sasha", state: "positive", text: 'Helloggggg everyone!'});
    const comments = await models.Comment.findAndCountAll({ hierarchy: true });
    ctx.body = comments;
});

router.post('/', async ctx => {
    const params = ctx.request.body.params;
    await models.Comment.create({ ...params });
    ctx.status = 201;
})

export default router;