let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 1, productName: "bardak", quantity: 2, unitPrice: 30 },
    { id: 1, productName: "kalem", quantity: 1, unitPrice: 20 },
    { id: 1, productName: "sarj cihazı", quantity: 2, unitPrice: 100 },
    { id: 1, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 1, productName: "Pot", quantity: 5, unitPrice: 150 }
]
cart.push({
    id: 7, productName: "ruhsat", quantity: 1, unitPrice: 20
})
console.log("<ul>")
cart.map(product=>{
console.log("<li>"  + product.productName + " : " + product.unitPrice * product.quantity + "</li>" )
})
let quantityOver2=cart.filter(product=> product.quantity>2)
console.log(quantityOver2)


let total = cart.reduce((acc,product)=> acc+ product.unitPrice,0)
console.log(total)


// ----------------------------------------------------------
function addToCart(sepet) {
    sepet.push({
        id: 7, productName: "ruhsat", quantity: 1, unitPrice: 20
    })
}
addToCart(cart)
let sayi=10
function sayiTopla(number) {
    number+=1
    
}
sayiTopla(sayi)
console.log(sayi)