//name = "zeynep" --- değer atamsı python için.
//değişken tanımlama type safe değil
//ecmascript 9dan önce kullanılanlar hepsi iken 
/*var name ="zeynepvar" */

////ecmascript 9dan sonra kullanılanlar let ve const

/*(1)
//değişken tanımlar LET
let name ="zeyneplet" 
console.log(name)
*/

/*var ve let farkları
var functiom scope, let block*/

//sabit tanımlar CONST değiştirilemez.
/*const name="zeynepconst"*/

/*(2)
function test(){
    if (true){
        var değişken="merhaba dünya"
    }    
    if (true){
        console.log(değişken)
    }  
    
}
test()
*/


/*(3)
//var keyword değişkenler tekrar tanımlanabilir. EN GÜNCEL "değişken" GELİR. --LET İLE VAROLAN DEĞİŞKENE YENİ DEĞİŞKEN ATANAMAZ---
var değişken="merhaba dünya"
var değişken="hello world"
console.log(değişken)
*/


/*(4)
//Hoisting: Bir değişkeni önce tanımlama sonra kullanmak
degisken="Merhaba Dünya"
console.log(degisken)
var degisken 
*/

/*(5)
//LET CONST FARKLILIKLARI 
let name="can" //mutable
const adi= "Can" //immutable

//name= "ahmet"
//adi="Ahmet"
*/

/*(6)
let agirlik=50
if(agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)
}
console.log(miktar)
*/


/*(7)
//geleneksel yöntem
function topla(a,b){
    return a+b
}

//arrow function es9 sonrası
const topla=(a,b) =>a+b
*/

/*(8)
//--geleneksel yöntem
function test(){
    console.log("merhaba"+this.name)
}
const person={
    name: "Can",
    soyle:test,
}
person.soyle()

*/


/*(9)
//--arrow function
const test=()=>{       //=> ile function yazmamıza gerek kalmıyor.
    console.log("merhaba dünya" +this.name)
}
const person={
    name: "Can",
    soyle:test,
}
person.soyle()
*/


/*(10)
function deneme(x){
    return x
}
const sonuc=deneme()
*/


/*(11) 
function addToCart(urun_adi,adet,fiyat){
    console.log(urun_adi)
    console.log(adet)
    console.log(fiyat)
}
addToCart("elma",5,10)
addToCart("armut",2,20)
addToCart("limon",3,15)


let urunler=[{urun_adi:"elma", fiyat:5, adet:10},
            {urun_adi:"armut", fiyat:10, adet:20},
            {urun_adi:"limon", fiyat:3, adet:15}]
function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)
}

addToCart(urunler) 
*/


/*(12) ---dizi---
let urunler=[{urun_adi:"elma", fiyat:5, adet:10},
            {urun_adi:"armut", fiyat:10, adet:20},
            {urun_adi:"limon", fiyat:3, adet:15}]

console.log(urunler[2]["urun_adi"])
*/

/* (13)
function topla(...sayilar){
    let toplam=0
    for(let i=0; i<sayilar.length; i++){
        toplam=toplam+sayilarilar[i]
    }
    console.log(toplam)
}
topla(10,20,30,40,50,60,70)
*/

// let bolgeler=["iç anadolu" ,"marmara", "karadeniz"]

/*(14)
//distractinh işlemi
let [icanadolu, marmara,karadeniz]= ["iç anadolu" ,"marmara", "karadeniz"] // let[birinci] şeklinde de yazılabilir içeride yazdıklarımız gelecek 
console.log(icanadolu)

let [birinci,ikinci,ucuncu]= [{adi: "iç anadolu", nufus:"20m"},
                                {adi: "marmara", nufus:"15m"},
                                {adi: "karadeniz", nufus:"40m"}]
console.log(birinci.adi)
*/

/*spread operation (15)
le sayilar=[30.100.200.300,350]
console.log(...sayilar)
*/



/*(16)
//error function  -----önemli-----
function test(){
a+100
}

const test=()=>{
    a+100
}

(test)=>a+100
test=>{a+100, b+200}
*/



/*condition ternary operator ----önemli----
//eski yöntem
if(a=100){
    console.log("100 e eşit")
    }
    else{
    console.log("100e eşit değil")
    }
//yeni yöntemi
const sonuc=a==100?"100 e eşit": "100e eşit değil"
*/


/*
function example(){
    if(condition1){
        return value1
    }else if(condition2){
        return value2
    }else if(condition3){
        return value3
    }else {
        return value4
    }
}
//kısa yöntemi --- ternary ---
function example(){
    return condition1?value1:
    condition2?value2:
    condition3?value3:
    value4
}
*/

/*geleneksel yöntem
const sayilar=[1,2,3,4,5,6,7,8,9,9]
const ciftsayilar=sayilar.filter(function(sayilar){
    return sayilar%2===0
})
console.log(ciftsayilar)
*/


/*(14)
//error function kısa yöntemi   ----kullan bunu----
const sayilar=[1,2,3,4,5,6,7,8,9,9]
const ciftsayilar=sayilar.filter((sayilar)=>sayilar%2===0)
console.log(ciftsayilar)
*/

const sayilar=[1,2,3,4,5,6,7,8,9,9]
const sayi=sayilar.find(function(sayilar){
    return sayilar%2==0
})
console.log(sayi)

