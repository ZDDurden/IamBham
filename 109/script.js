let prodArray=[];
let arrIds=[];
let arrCost=[];
let sum=0;
const tvBtn=document.getElementById('tv');
const watchBtn=document.getElementById('watch');
const gamesBtn=document.getElementById('games');

class Product{
    constructor(id, price, sale, stock){
        this.id=id;
        this.price=price;
        this.sale=sale;
        this.stock=stock;
    }
}
class Tv extends Product{
    constructor(id, price, sale, stock, size){
        super(id, price, sale, stock);
        this.size=size;
    }
    addTv(){
        tvBtn.addEventListener('click', ()=>{
            prodArray.push(newTv);
            console.log(newTv);
            console.log(prodArray);
        });
    }
}
class Watch extends Product{
    constructor(id, price, sale, stock, type){
        super(id, price, sale, stock);
        this.type=type;
    }
    addWatch(){
        watchBtn.addEventListener('click', ()=>{
            prodArray.push(newWatch);
            console.log(prodArray)
        });
    }
}
class Games extends Product{
    constructor(id, price, sale, stock, genre){
        super(id, price, sale, stock);
        this.genre=genre;
    }
    addGame(){
        gamesBtn.addEventListener('click', ()=>{
            prodArray.push(newGame);
            console.log(prodArray);
        });
    }
}
class Cart{
    constructor(products, total, number){
        this.products=products;
        this.total=total;
        this.number=number;
    }
    holdProduct(){
        for(let i=0;i<prodArray.length;i++){
        console.log(prodArray[i].id);
        return prodArray[i].id;
        }
    }
    totalCost(){
        for(let i=0;i<prodArray.length;i++){
        prodArray[i].price+=prodArray[i].price;
        console.log(prodArray[i].price);
        return prodArray[i].price;
        }
    }
    numProducts(){
        console.log(prodArray.length);
        return prodArray.length;
    }
}

const newTv=new Tv('Television', 500, false, 50, 32);
const newWatch=new Watch('Watch', 1000, true, 30, 'analog');
const newGame= new Games('Game', 60, false, 100, 'action');

function addTv(){
    tvBtn.addEventListener('click', ()=>{
        prodArray.push(newTv);
        arrIds.push(newTv.id);
        arrCost.push(newTv.price);
        console.log(prodArray);
    });
}
function addWatch(){
    watchBtn.addEventListener('click', ()=>{
        prodArray.push(newWatch);
        arrIds.push(newWatch.id);
        arrCost.push(newWatch.price);
        console.log(prodArray);
    });
}
function addGame(){
    gamesBtn.addEventListener('click', ()=>{
        prodArray.push(newGame);
        arrIds.push(newGame.id);
        arrCost.push(newGame.price);
        console.log(prodArray);
    });
}
function holdProduct(){
    console.log(arrIds);
    document.write('Products ordered: '+arrIds);
    return arrIds;
}
function totalCost(){
    arrSum = arrCost.reduce((a,b)=>{
          return a + b
        }, 0);
      
    console.log(arrSum);
    document.write(', Total Cost: $'+arrSum);
    return arrSum;
    
}
function numProducts(){
    console.log(prodArray.length);
    document.write(', Number of Items: '+prodArray.length);
    return prodArray.length;
}
console.log(newGame);
console.log(newTv);
console.log(newWatch);