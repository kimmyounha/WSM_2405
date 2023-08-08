//books 를 돌면서 book숫자와 같은 id값의 책을 가져오자 


//URL book에 해당하는 parameter 값 읽어오자 (String)
let url = new URL(location.href).searchParams;
let book = url.get("book");
//const book = new URL(location.href).searchParams.get("book");
console.log(`book : ${book} type: ${typeof book } `);
//
if(book === null){
    window.open("index.html", "_top");
}


//book 값 (string) -> bookk(number)변환
//let bookId = Number(book);
let bookId = parseInt(book);
console.log(`book : ${book} type: ${typeof bookId } `);

//boos를 돌면서 bookId(number)와 같은  id값의 책을 가져오자.
let bookData;
for (let bookOne of books) {
 if(bookId === bookOne.id){ //===는 타입까지 같아야함
    bookData = bookOne;
    break;
 }  
}

//제목을 보여주자.
let title = bookData.title
//console.log(bookData["title"]);
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author , publisher , bookImage);

//HTML 요소 
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

