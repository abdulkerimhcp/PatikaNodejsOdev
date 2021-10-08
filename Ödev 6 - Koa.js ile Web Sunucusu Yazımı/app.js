import Koa from "koa";
import fs from "fs";

const app = new Koa();

app.use(async (ctx, next) => {
  const url = ctx.request.url;
  console.log(url);
  if (url === "/") {
    await next();
    ctx.response.type = "html";
    ctx.response.body = fs.createReadStream("index.html");
  } else if (url === "/hakkimda") {
    await next();
    ctx.response.type = "html";
    ctx.response.body = fs.createReadStream("hakkimda.html");
  } else if (url === "/iletisim") {
    await next();
    ctx.response.type = "html";
    ctx.response.body = fs.createReadStream("iletisim.html");
  }
});

app.listen(3000);
