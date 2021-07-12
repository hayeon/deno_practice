import { Application, Router } from "https://deno.land/x/oak@v7.7.0/mod.ts" ; // 어플리케이션 임포트 

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());// 허락해줌

interface Book {
    id: string;
    title: string;
    author: string;
}
let books = [
    {
        id : "1",
        title :"홍길동전",
        author:"허균"
    },
    {
        id : "2",
        title :"신데렐라",
        author:"미상"
    },
    {
        id : "3",
        title :"백설공주",
        author:"허균"
    }
]
router.get("/", (context) => {
    //context.respond.body = "hello world"
});
console.log('server is listening on port 5000');
await app.listen({ port : 5000}); // promise return해서 await 해야함 탑 레벨 지원