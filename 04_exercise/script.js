const element = document.getElementById('send');

let newTitle;
let newAuthor;
let newInStock;
let newSoldOut;


element.addEventListener("click", (list) => {
	Newtitle = document.getElementById('title').value
    newAuthor = document.getElementById('author').value
    newInStock = document.getElementById('inStock').value
    newSoldOut = document.getElementById('soldOut').value

});







let books = [
    {
        title:'CDREAM TOWNnnnn',
        author:'David Baldacci',
        soldOut:true,
        inStock:true,
    },
    {
        title:'BEAUTIFUL',
        author:'Danielle Steel',
        soldOut:true,
        inStock:false,
    },
    {
        title:'AIT ENDS WITH US',
        author:'Colleen Hoover',
        soldOut:false,
        inStock:false,
    }
]
books.push({
    title: newTitle,
    author:newAuthor,
    soldOut:newSoldOut,
    inStock:newInStock,

})


let Book = function(title, author,inStock,soldOut){
    this.title = title;
    this.author = author;
    this.inStock = inStock;
    this.soldOut = soldOut;
}

function createTiles(books){
    let tileList = [];
    let price ='';
    books.forEach(book => {
        const currentBook = new Book(book.title, book.author, book.soldOut, book.inStock);
        const liTag = document.createElement('li');
        const sectionTag = document.createElement('section');
        const h2Tag = document.createElement('h2');
        const h3Tag = document.createElement('h3');
        const pTag = document.createElement('p');

        h2Tag.textContent = currentBook.title;
        h3Tag.textContent = currentBook.author

        if(book.soldOut == true || book.inStock == true ){
            price = "To Buy you may pay +10 CHF"
        }else{
            price = 'Avaliable'
        }
        pTag.textContent = price;

        liTag.appendChild(sectionTag);
        sectionTag.appendChild(h2Tag);
        sectionTag.appendChild(h3Tag)
        sectionTag.appendChild(pTag)

        tileList.push(liTag);
        
    });
    return tileList;
}


function addTiles(list){

    const ulTag = document.querySelector('ul');
    ulTag.innerHTML = "";
    list.forEach(li => ulTag.appendChild(li));
}

addTiles(createTiles(books)); 