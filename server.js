const serve = require('koa-static');
const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// or use absolute paths
app.use(serve(`${__dirname}/build`));
router.get('/*', async (ctx) => {
  await send(ctx, 'build/index.html');
});
app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');