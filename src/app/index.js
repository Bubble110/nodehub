const Koa=require('koa');
const userRouter =require('../router/user.router');
const bodyParser=require('koa-bodyparser');
const errorHandle=require('./error.handle');

const app = new Koa();

app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.on('error',errorHandle);

module.exports=app;