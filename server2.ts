import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts" ; // 어플리케이션 임포트 
//{ bodyReader } from "../../../AppData/Local/deno/deps/https/deno.land/edcdf83d7ee31024e114c37142fcd5d023012abe6d4662cf0fe75a340e2afefe.ts";
import router  from "./routes.ts";



const app = new Application();


app.use(router.routes());
app.use(router.allowedMethods());// 허락해줌

console.log('server is listening on port 5000');
await app.listen({ port : 5000}); // promise return해서 await 해야함 탑 레벨 지원