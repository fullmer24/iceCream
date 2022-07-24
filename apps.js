const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
},
]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
},
]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]




let ordered = []



// SECTION DRAW MENUS

function drawVessels() {
    let vessel = ''
    vessels.forEach(item => {
        vessel += `
        <div class="col-4 all-items onclick="order('${item.name}')">
            <img class="img-fluid p-2" src="${item.image}"
                alt="">
            <p class="bg-translucent name p-2">${item.name}</p>
            <p class="bg-translucent price p-2">$${item.price}</p>
        </div>
    `})
    let vesselElem = document.getElementById('vessels')
    vesselElem.innerHTML = vessel
}
drawVessels()

function drawFlavors() {
    let flavor = ''
    iceCream.forEach(item => {
        flavor += `
        <div class="col-4 all-items" onclick="order('${item.name}')">
            <img class="img-fluid p-2" src="${item.image}"
                alt="">
            <p class="bg-translucent name p-2">${item.name}</p>
            <p class="bg-translucent price p-2">$${item.price}</p>
        </div>
`})
    let flavorElem = document.getElementById('flavors')
    flavorElem.innerHTML = flavor
}
drawFlavors()

function drawToppings() {
    let topping = ''
    toppings.forEach(item => {
        topping += `
            <div id = "toppings" class="col-4 all-items onclick="order('${item.name}')"" >
                <img class="img-fluid p-2" src="${item.image}"
                    alt="">
                <p class="bg-translucent name p-2">${item.name}</p>
                <p class="bg-translucent price p-2">$${item.price}</p>
                </div>
        `})
    let toppingElem = document.getElementById('toppings')
    toppingElem.innerHTML = topping
}
drawToppings()

// SECTION CART

function drawOrders() {
    let template = ''
    ordered.forEach((ordered, i) => template += `
            <div div class="col-12 order-item" onclick = "deleteItem(${i})" >
                <p><span>${ordered.name}</span> - <span class="text-end ms-auto">$${ordered.price}</span></p>
            </div>
            `)
    let orderElem = document.getElementById('order-items')
    orderElem.innerHTML = template
    drawTotal()
}

function drawTotal() {
    let subtotal = 0
    ordered.forEach(order => subtotal += ordered.price)
    let totalElem = document.getElementById('total')
    totalElem.innerText = subtotal.toFixed(2)
}

function order(selectedName) {
    let orderedVessel = vessels.find(vessel => vessel.name == selectedName);
    let orderedFlavor = iceCream.find(flavor => flavor.name == selectedName);
    let orderedTopping = toppings.find(topping => toppings.name == selectedName);
    ordered.push(orderedFlavor, orderedTopping, orderedVessel)
    drawOrders()
}