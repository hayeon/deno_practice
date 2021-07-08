const encoder = new TextEncoder();

const helloText = encoder.encode("hello");


 await Deno.writeFile("hello.txt", helloText);
    

