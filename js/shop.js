let shop_product = [{
        img: 'img/shop_card.jpg',
        name: 'Gify Card',
        price: '$25.00 USD'
    },
    {
        img: 'img/1.jpg',
        name: 'White Tent',
        price: '$200.00 USD'
    },
    {
        img: 'img/2.jpg',
        name: 'Tin Coffee Tumbler',
        price: '$35.00 USD'
    },
    {
        img: 'img/3.jpg',
        name: 'Blue Canvas Pack',
        price: '$25.00 USD'
    }
]

let div = document.createElement('div');
let btn = document.querySelectorAll('.btn');
let shop_content = document.querySelector('.shop_content');
let img = document.createElement('img');
let title = document.createElement('p');
let paragrap = document.createElement('b');
let button = document.createElement('button');
button.classList.add('shop_btn');


btn.forEach((elem, i) => {
    btn[i].addEventListener('click', function() {
        shop_content.removeChild(shop_content.childNodes[0]);
        btn.forEach((item) => {
            item.classList.remove("activeBtn")

        })
        elem.classList.add("activeBtn");

        shop_content.appendChild(div);
        img.src = shop_product[i].img;
        title.innerHTML = shop_product[i].name;
        paragrap.innerHTML = shop_product[i].price;



        button.innerHTML = "Details";
        div.appendChild(img);
        div.append(title);
        div.append(paragrap);
        div.appendChild(button)

    })
})
document.querySelector('.btn').click();
window.onload = (() => {
    shop_content.appendChild(div);
    img.src = shop_product[0].img;
    title.innerHTML = shop_product[0].name;
    paragrap.innerHTML = shop_product[0].price;

    button.innerHTML = "Details";
    div.appendChild(img);
    div.append(title);
    div.append(paragrap);
    div.appendChild(button)
})