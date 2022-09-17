const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello world";
});

app.listen(4000, () => {
  console.log("4000번 포트에서 서버 대기중입니다");
});
