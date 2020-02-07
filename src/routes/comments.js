import Router from 'koa-router';
import models from '../db';

const router = new Router();

router.get('/', async ctx => {
    // const comment = await models.Comment.create({ author: "Tato", state: "positive", text: 'Helloggggg everyone!', parentId: 1});
    const comments = await models.Comment.findAndCountAll({ hierarchy: true });
    ctx.body = comments;
});

router.post('/', async ctx => {
    const params = ctx.request.body.params;
    await models.Comment.create({ ...params });
    ctx.status = 201;
});

router.put('/', async ctx => {
    const params = ctx.request.body.params;
    await models.Comment.update(params, { where: { id: params.id } });
    ctx.status = 204;
})

router.delete('/', async ctx => {
    const { id } = ctx.query;
    await models.Comment.destroy({ where: { id } });
    ctx.status = 204;
})

export default router;