import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts" ;
import { v4 } from "https://deno.land/std@0.101.0/uuid/mod.ts";
import { Book } from "./types.ts";

const router = new Router();



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
    context.response.body = "hello world";
}) //; 라우터 없이 바로 .get으로 연결
    .get("/books", (context) => {
        context.response.body = books;
    })

.post("/book", async (context) =>  {
  const body= await context.request.body(); //promise return해서 await 필요 그러나 top level이 아니라 오류남
//만약 정보를 제공하지 않았다면
if (!context.request.hasBody) //바디가 없는 걸로 값이 있는지 없는지 알 수 있음
     {
    context.response.status = 400
    context.response.body = "데이터가 없습니다." 

} else { //정보를 제공 받았다면 아이디를 임의로 생성하고 제공받은 정보로 book object를 만드러준다.
   
    const book: Book= body.value;
    book.id = v4.generate();
    books.push(book)
    context.response.status = 201
    context.response.body = book
    
}


})
.get("/book/:id", async(context) => {
//books 안에 있는 책 중 param의 값과 같은 id를 가진 책 찾기
 
const book: Book | undefined = books.find((b) => b.id === context.params.id);

if(book) {
    context.response.body = book;
    context.response.status = 200;
    
} else {
    context.response.body = "책을 찾지 못함";
    context.response.status = 404;
}
});

export default Router;